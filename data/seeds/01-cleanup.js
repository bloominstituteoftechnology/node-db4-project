const { clean } = require(`knex-cleaner`)

exports.seed = function (knex) {
    return clean (knex, {
        mode: `truncate`,
        ignoreTables: [`knex_migrates`,`knex_migrations_lock`]
    })
}