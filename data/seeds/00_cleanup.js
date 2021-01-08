exports.seed = async function (knex) {
	await knex("section").truncate();
	await knex("recipes").truncate();
	await knex("ingredients").truncate();
	await knex("measurements").truncate();
	await knex("instructions").truncate();
};
