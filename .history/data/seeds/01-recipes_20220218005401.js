const recipes = [
	{ recipe_name: 'Mezze Maniche alla Carbonara' },
	{ recipe_name: 'Spaghetti Cacio e Pepe' },
	{ recipe_name: 'Spaghetti Puttanesca' },
];

const ingredients = [
	{ ingredient_name: 'Mezze Maniche Pasta', ingredient_unit: 'grams' },
	{ ingredient_name: 'Egg Yolks', ingredient_unit: 'yolk(s)' },
	{ ingredient_name: 'Guanciale', ingredient_unit: 'grams' },
	{ ingredient_name: 'Pecorino Romano Cheese', ingredient_unit: 'grams' },
	{ ingredient_name: 'Course Black Pepper', ingredient_unit: 'to taste' },
	{ ingredient_name: 'Spaghetti', ingredient_unit: 'grams' },
	{ ingredient_name: 'Salt', ingredient_unit: 'to taste' },
	{ ingredient_name: 'Salted Capers', ingredient_unit: 'grams' },
	{ ingredient_name: 'Anchovies in Oil', ingredient_unit: 'grams' },
	{ ingredient_name: 'Garlic', ingredient_unit: 'clove(s)' },
	{ ingredient_name: 'Extra Virgin Olive Oil', ingredient_unit: 'grams' },
	{ ingredient_name: 'Peeled tomatoes', ingredient_unit: 'grams' },
	{ ingredient_name: 'Parsley', ingredient_unit: '' },
	{ ingredient_name: 'Gaeta Olives', ingredient_unit: 'grams' },
	{ ingredient_name: 'Dried Chili Peppers', ingredient_unit: 'pepper(s)' },
];

const steps = [
	// Carbonara
	{ step_instructions: 'Step 1 Instructions', step_number: 1, recipe_id: 1 },
	{ step_instructions: 'Step 2 Instructions', step_number: 2, recipe_id: 1 },
	{ step_instructions: 'Step 3 Instructions', step_number: 3, recipe_id: 1 },
    { step_instructions: 'Step 4 Instructions', step_number: 4, recipe_id: 1 },
    { step_instructions: 'Step 5 Instructions', step_number: 5, recipe_id: 1 },
	// Cacio e Pepe
	{ step_instructions: 'Step 1 Instructions', step_number: 1, recipe_id: 2 },
	{ step_instructions: 'Step 2 Instructions', step_number: 2, recipe_id: 2 },
	{ step_instructions: 'Step 3 Instructions', step_number: 3, recipe_id: 2 },
    { step_instructions: 'Step 4 Instructions', step_number: 4, recipe_id: 2 },
	// Puttanesca
	{ step_instructions: 'Step 1 Instructions', step_number: 1, recipe_id: 3 },
	{ step_instructions: 'Step 2 Instructions', step_number: 2, recipe_id: 3 },
	{ step_instructions: 'Step 3 Instructions', step_number: 3, recipe_id: 3 },
    { step_instructions: 'Step 4 Instructions', step_number: 4, recipe_id: 3 },
	{ step_instructions: 'Step 5 Instructions', step_number: 5, recipe_id: 3 },
	{ step_instructions: 'Step 6 Instructions', step_number: 6, recipe_id: 3 },
    { step_instructions: 'Step 7 Instructions', step_number: 7, recipe_id: 3 },
	{ step_instructions: 'Step 8 Instructions', step_number: 8, recipe_id: 3 },
	{ step_instructions: 'Step 9 Instructions', step_number: 9, recipe_id: 3 },
    { step_instructions: 'Step 10 Instructions', step_number: 10, recipe_id: 3 },
];

const step_ingredients = [
    // Carbonara
    { step_id: 1, ingredient_id: 1, quantity: 320 },
    { step_id: 2, ingredient_id: 2, quantity: 6 },
    { step_id: 3, ingredient_id: 3, quantity: 150 },
    { step_id: 2, ingredient_id: 4, quantity: 50 },
    { step_id: 5, ingredient_id: 5, quantity: 'add ' },
	// Cacio e Pepe
    { step_id: 5, ingredient_id: 6, quantity: 320 },
    { step_id: 7, ingredient_id: 5, quantity: 'add ' },
    { step_id: 8, ingredient_id: 1, quantity: 1 },
    { step_id: 9, ingredient_id: 7, quantity: 'add ' },
	// Puttanesca
    { step_id: 10, ingredient_id: 1, quantity: 1 },
    { step_id: 11, ingredient_id: 1, quantity: 1 },
    { step_id: 12, ingredient_id: 1, quantity: 1 },
    { step_id: 13, ingredient_id: 1, quantity: 1 },
    { step_id: 14, ingredient_id: 1, quantity: 1 },
    { step_id: 15, ingredient_id: 1, quantity: 1 },
];

exports.seed = function (knex) {};
