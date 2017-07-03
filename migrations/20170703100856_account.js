
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('email').notNull();
    table.text('password').notNull();
    table.text('image');
    table.text('facebook_url');
    table.text('instagram_url');
    table.text('twitter_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account');
};
