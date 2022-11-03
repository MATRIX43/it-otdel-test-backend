const _ = require('lodash');

class Model {
  constructor(model) {
    this.Model = model;
  }

  async getAll (filter = {}) {
    const qb = this.Model.clone();
    const _filter = { deleted: 0 };
    _.forOwn(filter, (val, key) => {
      _filter[key] = filter[key];
    });
    if (!_.isEmpty(_filter)) {
      qb.where(_filter);
    }
    return await qb.select('*').offset(0);
  };

  async getOne(id) {
    const qb = this.Model.clone();
    const _filter = { id, deleted: 0 };
    const record = _.chain(await qb.select('*').where(_filter).limit(1)).get('[0]').toPlainObject().value();
    if (!record || _.isEmpty(record)) {
      return Promise.reject(Object.assign(new Error('Record not found')));
    }
    return record;
  }

  async createOne(data) {
    const qb = this.Model.clone();
    await qb.insert(data);
    return { success: 'ok' };
  }
}

module.exports = { Model };
