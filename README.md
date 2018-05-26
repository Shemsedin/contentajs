<!--
  This file was generated by emdaer

  Its template can be found at .emdaer/README.emdaer.md
-->

<!--
  emdaerHash:fa7c1ad43f3fe1454371a09785dd0141
-->

<h1 id="contentajs-img-align-right-src-logo-svg-alt-contenta-logo-title-contenta-logo-width-100-">ContentaJS <img align="right" src="./logo.svg" alt="Contenta logo" title="Contenta logo" width="100"></h1>
<p>ContentaJS is a project that integrates with Contenta CMS to provide
an ultra high performing headless CMS. It also provides a nodejs application
where to host your Server Side Rendering and custom code integrations.</p>
<p><img src="./.emdaer/docs/assets/contentacms-node.png" alt="Contenta Stack Architecture"></p>
<p><strong>IMPORTANT:</strong> this project is meant to be a starting kit for the node
integration of your application based on Contenta CMS. We <strong>do not</strong> provide
upgrade paths or backwards compatibility. The model for this is <em>Fork &amp; Go</em>.</p>
<!-- toc -->
<ul>
<li><a href="#features">Features</a></li>
<li><a href="#installation">Installation</a><ul>
<li><a href="#local-installation">Local Installation</a></li>
<li><a href="#aws-installation">AWS Installation</a></li>
<li><a href="#install-using-docker">Install Using Docker</a><ul>
<li><a href="#notes">Notes</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#license">License</a></li>
</ul>
<!-- tocstop -->
<p><a href="https://travis-ci.org/contentacms/contentajs/"><img src="https://img.shields.io/travis/contentacms/contentajs.svg?style=flat-square" alt="Travis"></a> <a href="https://coveralls.io/github/contentacms/contentajs/"><img src="https://img.shields.io/coveralls/github/contentacms/contentajs.svg?style=flat-square" alt="Coverage"></a> <a href="https://github.com/emdaer/emdaer"><img src="https://img.shields.io/badge/📓-documented%20with%20emdaer-F06632.svg?style=flat-square" alt="Documented with emdaer"></a></p>
<h2 id="features">Features</h2>
<p><em>This section is still under development.</em></p>
<p>The main features of this project cover:</p>
<ul>
<li>Automatic integration with the API exposed by your Contenta CMS install.
Just provide the URL of the site and everything is taken care of for you.</li>
<li>Multi-threaded nodejs server that takes advantage of all the cores of the
server’s CPU.</li>
<li>A Subrequests server for request aggregation. Learn more about <a href="./.emdaer/docs/subrequests.md">subrequests</a>.</li>
<li>A <a href="http://redis.io">Redis</a> integration. This comes with a connection pool to
eliminate latency obtaining connections with the server.</li>
<li>Type safe development environment using <a href="http://flow.org">Flow</a>.</li>
</ul>
<h2 id="installation">Installation</h2>
<p>In order to install ContentaJS you will need to meet the following requirements:</p>
<ul>
<li><code>nodejs</code> ^8.11.1 or higher.</li>
<li>A working installation of <a href="https://github.com/contentacms/contenta_jsonapi">Contenta CMS</a>.</li>
<li>A Redis server.</li>
</ul>
<h3 id="local-installation">Local Installation</h3>
<p><em>Fill in the instructions on how to install locally</em></p>
<h3 id="aws-installation">AWS Installation</h3>
<p><em>Fill in the instructions on how to install in AWS with ElastiCache using CloudFormation or a custom AMI</em></p>
<h3 id="install-using-docker">Install Using Docker</h3>
<p><em>Fill in the instructions on how to install using Docker. Ideally this installs
Contenta CMS (Drupal), ContentaJS, and the Redis server.</em></p>
<h4 id="notes">Notes</h4>
<p><em>This is a dumping ground of notes. This section will disappear eventually, it’s
just meant to save ideas for documentation to process some other time.</em></p>
<ul>
<li>Mention that both Drupal and node need to talk to the same Redis server.</li>
<li>Make it clear that this is a starting point. To this node install you can:
proxy to other microservices, add server side rendering, etc.</li>
<li>Server side rendering can be added as a package / middleware.</li>
<li>Introduce the ability to timeout requests.</li>
<li>Create a separate package using passport to integrate with Simple OAuth.</li>
<li>Make CORS customizable from configuration.</li>
<li>Add subrequests.</li>
<li>If all subrequests are to the CMS forward the blueprint to Drupal’s subrequests.</li>
<li>Make Flow types nicer in the middlewares.</li>
<li>Fix the link in the responses from Contenta CMS.</li>
<li>Validate the request bodies before reaching the CMS using the resource schemas.</li>
<li>Filter requests that the CMS should not be bothered with using the resource lists.</li>
</ul>
<h2 id="contributors">Contributors</h2>
<details>
<summary><strong>Contributors</strong></summary><br>
<a title="Engineer and programmer focused on online applications." href="https://github.com/e0ipso">
  <img align="left" src="https://avatars0.githubusercontent.com/u/1140906?s=24">
</a>
<strong>Mateu Aguiló Bosch</strong>
<br><br>
</details>

<h2 id="license">License</h2>
<p>@contentacms/contentajs is <a href="./LICENSE">MIT licensed</a>.</p>
