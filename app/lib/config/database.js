const path = require('path');

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'database',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'test',
    charset: 'utf8',
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join('..', 'migrations'),
  },
  seeds: {
    directory: path.join('..', 'seeds'),
  },
};
