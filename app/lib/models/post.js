const { knex } = require('../database');
const { Model } = require('./model-base');
const Post = new Model(knex('posts'));

module.exports = { Post };
