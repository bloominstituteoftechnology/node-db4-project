const { clean } = require('knex-cleaner');

exports.seed = function (knex) {

    return cleaner(knex, {
        mode: 'truncate',
        ignoreTables: ['knex_migrations', 'knex_migrations_lock']
    })
}