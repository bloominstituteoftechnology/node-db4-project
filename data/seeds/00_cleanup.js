exports.seed = async function(knex) {
	await knex("recipes_ingredients").truncate()
	await knex("instructions").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}