/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
		{ recipe_name: 'Pasta Aglio e Olio' },
		{ recipe_name: 'Grilled Cheese Sandwich' },
		{ recipe_name: 'Greek Yogurt Parfait' },
	]);
};
