exports.seed = function (knex) {
	return knex('steps').insert([
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
		{ 
            step_instructions: 'Step 6 Instructions', 
            step_number: 6, 
            recipe_id: 3 },
		{
			step_instructions: 'Step 7 Instructions',
			step_number: 7,
			recipe_id: 3,
		},
		{
			step_instructions: 'Step 8 Instructions',
			step_number: 8,
			recipe_id: 3,
		},
		{
			step_instructions: 'Step 9 Instructions',
			step_number: 9,
			recipe_id: 3,
		},
		{
			step_instructions: 'Step 10 Instructions',
			step_number: 10,
			recipe_id: 3,
		},
	]);
};
