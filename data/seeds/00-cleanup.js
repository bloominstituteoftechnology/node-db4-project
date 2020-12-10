// const cleaner = require('knex-cleaner');

// exports.seed = function(knex) {
//   return cleaner.clean(knex, {
//     mode: 'truncate', // resets ids
//     ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
//   });
// };

exports.seed = async function(knex) {
	await knex("steps & ingredients").truncate()
	await knex("steps").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}