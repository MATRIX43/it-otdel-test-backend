const PostData = require('../data');
const _ = require('lodash');

class Middleware {
  constructor(
  ) {
    this.data = new PostData();
  }

  getAll(req, res, next) {
    const filter = this.getFilter(req.query);
    const pagination = this.getPagination(req.query);
    return this.data.getAll(filter, pagination)
      .then((data) => res.send(data))
      .catch((e) => next(e));
  }

  getOne(req, res, next) {
    const filter = this.getFilter(req.query);
    return this.data.getOne(filter)
      .then((data) => res.send(data))
  }

  createOne(req, res, next) {
    const data = req.body; // todo check and valid
    return this.data.createOne(data)
      .then((data) => res.send(data))
  }

  search(req, res, next) {
    const filter = req.query;
    return this.data.search(filter)
      .then((d) => res.send(d))
  }


  deleteOne(req, res, next) {

  }

  updateOne(req, res, next) {

  }

  getFilter(query) {
    return query; //todo can validate
  }

  getPagination(query) {
    return {
      ..._.pick(query, ['page', 'pageSize']),
      orderBy: query.orderBy || 'asc'
    }
  }
}

module.exports = new Middleware();
