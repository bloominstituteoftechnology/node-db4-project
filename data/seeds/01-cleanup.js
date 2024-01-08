const { clean } = require('knex-cleaner')

exports.seed = function(knex) {
    return clean(knex, {
        mode: 'truncate',
        ignoreTables: ['knex_migrations', 'knex_migration_lock']
    })
}