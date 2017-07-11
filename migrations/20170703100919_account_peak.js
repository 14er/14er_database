
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account_peak', table => {
    table.increments('id').primary();
    table.integer('account_rating').notNull().defaultTo(0);
    table.text('account_image_url');
    table.text('account_notes');
    table.boolean('is_complete');
    table.timestamp('date_complete').defaultTo(knex.fn.now());
    table.integer('account_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('peak_id').unsigned().references('id').inTable('peak').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account_peak');
};
