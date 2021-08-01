const { clean } = require("knex-cleaner");
//----------------------------------------------------------------------------//
// USING knex-cleaner
//----------------------------------------------------------------------------//
// This package makes it easy to clear all of your tables.
//
// Having a single "seed" file that clears all tables allows you to control the
// order in which tables are truncated, if needed, and prevents you from having
// to duplicate truncate behavior in each seed file. And knex-cleaner makes it
// easy to truncate all of the tables in your database with a single call. (Be
// sure to configure it to ignore - not truncate - the knex_migrations tables,
// or you will break your migrations! The records in those tables are used by
// knex to manage migrations).
//
exports.seed = function (knex) {
  return clean(knex, {
    mode: "truncate", // resets ids
    ignoreTables: ["knex_migrations", "knex_migrations_lock"], // don't empty migration tables
  });
};
