
exports.seed = async function(knex) {
	await knex("steps & ingredients").truncate()
	await knex("steps").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}