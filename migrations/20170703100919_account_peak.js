
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account_peak', table => {
    table.increments('id').primary();
    table.integer('account_rating')
    table.text('account_image_url');
    table.integer('account_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('peak_id').unsigned().references('id').inTable('peak').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account_peak');
};
