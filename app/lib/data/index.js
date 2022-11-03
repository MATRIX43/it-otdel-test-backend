const { Post } = require('../models/post');
const _ = require('lodash');

class PostData {
  constructor() {
    this.post = Post
  }

  getAll(filter, pagination, restrictions = {}) {
    return this.post.getAll(filter, pagination, restrictions)
  }

  getOne(id, restrictions = {}) {
    return this.post.getOne(id, restrictions)
  }

  createOne(data, restrictions = {}) {
    return this.post.createOne(data, restrictions);
  }

  async search(filter) {
    const qb = this.post.Model.clone();
    if (_.isEmpty(filter)) {
      return this.getAll({}, {});
    }
    return qb.select('*').where(filter.field, 'like', `%${filter.val}%`);
  }
}


module.exports = PostData;
