const { clean } = require("knex-cleaner")

//Truncate tables in the db using knex-cleaner
exports.seed = function (knex) {
  return clean(knex, {
    mode: "truncate",
    ignoreTables: ["knex_migrations", "knex_migrations_lock"],
  })
}
