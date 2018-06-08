// @flow

const _ = require('lodash');
const config = require('config');
const cluster = require('cluster');
const os = require('os');
const Adios = require('adios');
const logger = require('pino')();

const fetchCmsMeta = require('./helpers/fetchCmsMeta');

/**
 * Spawns a web worker and tracks the pid in the webWorkers hash.
 *
 * @param {Object} context
 *   Additional info to send to the Web workers.
 * @param {Object} webWorkers
 *   The repository of web workers.
 *
 * @return {Worker}
 *   The child process worker.
 */
const spawnWebWorker = (
  context: { [string]: any },
  webWorkers: { [number]: * }
) => {
  const info = Object.assign({}, { type: 'webWorker' }, context);
  const worker = cluster.fork(info);
  webWorkers[worker.process.pid] = worker;
  logger.info('Starting web worker with pid: %d.', worker.process.pid);
  return worker;
};

const bootstrap = () => {
  const webWorkers = {};
  if (cluster.isMaster) {
    // Set the process name so that it can be cleanly killed by npm stop.
    process.title = config.get('app.name.machine');
    Adios.master.init(config.get('app.adiosSocket'));
    const procs = config.get('app.processes') || os.cpus().length;

    // Initialize JSON RPC.
    return fetchCmsMeta().then(res => {
      const mapped = {};
      res.forEach(([map, jsonRpcResponse]) => {
        Object.keys(map).forEach(variableName => {
          const variableValue = _.get(jsonRpcResponse, [
            'result',
            map[variableName],
          ]);
          mapped[variableName] = variableValue;
        });
      });
      Object.assign(process.env, mapped);
      // Proxy for the JSON API server in Contenta CMS.
      let x;
      for (x = 0; x < procs; x += 1) {
        spawnWebWorker(mapped, webWorkers);
      }

      cluster.on('exit', (worker, code) => {
        if (code === 0) {
          return;
        }
        logger.error(
          'Worker %d died. Spawning a new process',
          worker.process.pid
        );
        if (webWorkers[worker.process.pid]) {
          webWorkers[worker.process.pid] = null;
          delete webWorkers[worker.process.pid];
          spawnWebWorker(mapped, webWorkers);
        }
      });
    });
  } else if (process.env.type === 'webWorker') {
    require('./helpers/workers/web'); // eslint-disable-line global-require
  }
};

module.exports = { spawnWebWorker, bootstrap };
