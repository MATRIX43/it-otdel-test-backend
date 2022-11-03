const restify = require('restify');
const config = require('../config/server');

let server = null;

function createServer() {

  if (server) { return server }

  server = restify.createServer({
    name: config.name,
    version: config.version,
  });

  server
    .use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      return next();
    })
    .on('error', onError)
    .on('listening', onListening)
    .use(restify.plugins.bodyParser({ mapParams: false }))
    .use(restify.plugins.queryParser({ mapParams: false, arrayLimit: 10000 }))
    .listen(config.port);

  return server;
}

function onError(err) {
  throw new Error(err);
}

function onListening() {
  console.info(`Listening port ${config.port}`)
}

module.exports = createServer;
