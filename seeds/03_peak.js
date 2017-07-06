const peak = require('../data-sets/peaks.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE peak RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('peak').insert(peak);
    });
};
