
exports.up = function(knex, Promise) {
  return knex.schema.createTable('range', table => {
    table.increments('id').primary();
    table.text('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('range');
};
