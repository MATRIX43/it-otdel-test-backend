const middleware = require('../middleware');

module.exports = (server) => {
    server.get('/api', (req, res, next) => middleware.getAll(req, res, next));
    server.get('/api/:id', (req, res, next) => middleware.getOne(req, res, next));
    server.get('/api/search', (req, res, next) => middleware.search(req, res, next));
    server.post('/api', (req, res, next) => middleware.createOne(req, res, next));
    //todo PUT & DELETE
};
