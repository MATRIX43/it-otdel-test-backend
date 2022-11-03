exports.seed = function (knex, Promise) {
  const tableName = 'posts';
  const rows = [];
  return knex(tableName).del().then(() => Promise.all(rows.map(row => knex(tableName).insert(row))));
};
