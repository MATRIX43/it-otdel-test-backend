const table = 'posts';

exports.up = function(knex) {
  return knex.schema.createTable(table, function(table) {
      table.increments('id').primary();
      table.string('author', 256).notNullable();
      table.string('message', 256).notNullable(); // we can use jsonb for another search schema
      table.boolean('deleted').defaultTo(false);
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('deleted_at');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable(table);
};
