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
	// Cacio e Pepe
	{ step_instructions: 'Step 1 Instructions', step_number: 1, recipe_id: 2 },
	{ step_instructions: 'Step 2 Instructions', step_number: 2, recipe_id: 2 },
	{ step_instructions: 'Step 3 Instructions', step_number: 3, recipe_id: 2 },
	// Puttanesca
	{ step_instructions: 'Step 1 Instructions', step_number: 1, recipe_id: 3 },
	{ step_instructions: 'Step 2 Instructions', step_number: 2, recipe_id: 3 },
	{ step_instructions: 'Step 3 Instructions', step_number: 3, recipe_id: 3 },
];

const step_ingredients = [
    {step_id: 1, ingredient_id:, quantity: 1}
]


exports.seed = function (knex) {};
