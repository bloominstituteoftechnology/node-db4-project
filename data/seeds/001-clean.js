const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    // Keeps the migration tables
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  });
};
