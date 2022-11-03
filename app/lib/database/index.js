const config = require('../config/database');
const knex = require('knex')(config);

module.exports = { knex };
