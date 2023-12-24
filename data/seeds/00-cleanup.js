const cleaner = require('knex-cleaner')

exports.seed =  function(knex) {
  // Deletes ALL existing entries
  return(cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations','knex_migrations_lock']
  }))
};
