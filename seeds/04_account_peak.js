const account_peak = require('../data-sets/account_peak.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE account_peak RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('account_peak').insert(account_peak);
    });
};
