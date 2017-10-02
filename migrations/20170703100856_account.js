
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('first_name').notNull();
    table.text('last_name').notNull();
    table.text('email').notNull();
    table.text('password').notNull();
    table.text('image').defaultTo('https://s3.us-east-2.amazonaws.com/co14/default_profile_icon.png');
    table.text('facebook_url').defaultTo('https://facebook.com');
    table.text('instagram_url').defaultTo('https://instagram.com');
    table.text('twitter_url').defaultTo('https://twitter.com');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account');
};
