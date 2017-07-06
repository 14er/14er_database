
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peak', table => {
    table.increments('id').primary();
    table.text('peak_name').notNull();
    table.text('elevation').notNull();
    table.text('image_url');
    table.text('difficulty');
    table.integer('rank');
    table.integer('range_id').unsigned().references('id').inTable('range').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('peak');
};
