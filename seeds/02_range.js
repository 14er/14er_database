const range = require('../data-sets/ranges.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE range RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('range').insert(range);
    });
};
