/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').truncate()
  await knex('steps').insert([
		{
			step_number: 1,
			recipe_id: 1,
			instruction: 'Boil spaghetti until al dente, then drain.',
		},
		{
			step_number: 2,
			recipe_id: 1,
			instruction: 'In a pan, sauté minced garlic in olive oil until golden.',
		},
		{
			step_number: 3,
			recipe_id: 1,
			instruction:
				'Toss cooked pasta in the garlic oil, add red pepper flakes, salt, and chopped parsley.',
		},
		{
			step_number: 4,
			recipe_id: 1,
			instruction: 'Mix well and serve with grated Parmesan cheese',
		},
		{
			step_number: 1,
			recipe_id: 2,
			instruction: 'Butter two slices of bread on one side each.',
		},
		{
			step_number: 2,
			recipe_id: 2,
			instruction:
				'Place cheese (cheddar or any melty cheese you like) between the unbuttered sides.',
		},
		{
			step_number: 3,
			recipe_id: 2,
			instruction: 'Heat a pan over medium heat and place the sandwich.',
		},
		{
			step_number: 4,
			recipe_id: 2,
			instruction:
				'Cook until golden brown on both sides and the cheese melts.',
		},
		{
			step_number: 1,
			recipe_id: 3,
			instruction:
				'In a glass, layer Greek yogurt, granola, and mixed berries (strawberries, blueberries, raspberries).',
		},
		{
			step_number: 2,
			recipe_id: 3,
			instruction: 'Repeat layers until the glass is full.',
		},
		{
			step_number: 3,
			recipe_id: 3,
			instruction: 'Top with a drizzle of honey or maple syrup.',
		},
	]);
};
