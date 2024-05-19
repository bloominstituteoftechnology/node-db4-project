/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredient_step_info').truncate()
  await knex('ingredient_step_info').insert([
		{ recipe_id: 1, step_id: 1, ingredient_id: 1, ingredient_quantity: 2 },
		{ recipe_id: 1, step_id: 2, ingredient_id: 2, ingredient_quantity: 0.5 },
		{ recipe_id: 1, step_id: 2, ingredient_id: 3, ingredient_quantity: 1 },
		{ recipe_id: 1, step_id: 3, ingredient_id: 4, ingredient_quantity: 0.1 },
		{ recipe_id: 1, step_id: 3, ingredient_id: 5, ingredient_quantity: 0.1 },
		{ recipe_id: 1, step_id: 3, ingredient_id: 6, ingredient_quantity: 0.5 },
		{ recipe_id: 1, step_id: 4, ingredient_id: 7, ingredient_quantity: 1 },
		{ recipe_id: 2, step_id: 1, ingredient_id: 8, ingredient_quantity: 0.5 },
		{ recipe_id: 2, step_id: 1, ingredient_id: 9, ingredient_quantity: 2 },
		{ recipe_id: 2, step_id: 2, ingredient_id: 10, ingredient_quantity: 2 },
		{ recipe_id: 3, step_id: 1, ingredient_id: 11, ingredient_quantity: 6 },
		{ recipe_id: 3, step_id: 1, ingredient_id: 12, ingredient_quantity: 1 },
		{ recipe_id: 3, step_id: 1, ingredient_id: 13, ingredient_quantity: 2 },
		{ recipe_id: 3, step_id: 1, ingredient_id: 14, ingredient_quantity: 2 },
		{ recipe_id: 3, step_id: 1, ingredient_id: 15, ingredient_quantity: 2 },
		{ recipe_id: 3, step_id: 3, ingredient_id: 16, ingredient_quantity: .5 },
		{ recipe_id: 3, step_id: 3, ingredient_id: 17, ingredient_quantity: .5 },
	]);
};
