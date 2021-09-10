//Truncates Seeds In DATABASE
//Imports
const cleaner = require('knex-cleaner');


//Exports; Exposing
exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // Resets IDs
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  });
};