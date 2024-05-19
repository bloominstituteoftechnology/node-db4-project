/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
		{ ingredient_name: 'spaghetti' },
		{ ingredient_name: 'minced garlic' },
		{ ingredient_name: 'olive oil' },
		{ ingredient_name: 'red pepper flakes' },
		{ ingredient_name: 'salt' },
		{ ingredient_name: 'chopped parsley' },
		{ ingredient_name: 'Parmesan cheese' },
		{ ingredient_name: 'Butter' },
		{ ingredient_name: 'bread' },
		{ ingredient_name: 'cheddar cheese' },
		{ ingredient_name: 'Greek yogurt' },
		{ ingredient_name: 'granola' },
		{ ingredient_name: 'strawberries' },
		{ ingredient_name: 'blueberries' },
		{ ingredient_name: 'raspberries' },
		{ ingredient_name: 'honey' },
		{ ingredient_name: 'maple syrup' }
	]);
};
