exports.seed = function (knex) {
	return knex('steps').insert([
		{ step_instructions: 'Place water in a sauce pan' },
		{
			step_instructions:
				'Place saucepan on the stove and turn the burner on high',
		},
		{ step_instructions: 'Place hotdogs into water' },
		{ step_instructions: 'Allow water to come to a boil' },
		{ step_instructions: 'Place hotdog in bun' },
		{ step_instructions: 'Put mustard on top' },
		{ step_instructions: 'Put ketchup on top' },
		{ step_instructions: 'Put relish on top' },
		{ step_instructions: 'Enjoy!' },
		{ step_instructions: 'Place bread into the toaster' },
		{ step_instructions: 'Put cinnamon into a small bowl' },
		{ step_instructions: 'Mix sugar with cinnamon' },
		{ step_instructions: 'Spread butter on top of the toast' },
		{
			step_instructions:
				'Sprinkle cinnamon and sugar mixure on top of butter',
		},
		{ step_instructions: 'Shake of excess mixture' },
	]);
};
