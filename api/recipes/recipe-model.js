const db = require('../../data/db-config');

async function findAll() {
	const recipes = await db('rec_step_ingr as RSI')
		.leftJoin('recipes as R', 'R.recipe_id', 'RSI.recipe_id')
		.leftJoin('steps as S', 'S.step_id', 'RSI.step_id')
		.leftJoin('ingredients as I', 'I.ingredient_id', 'RSI.ingredient_id')
		.orderBy('R.recipe_id', 'step_number')
		.first()
		.select(
			'R.recipe_id',
			'recipe_name',
			'S.step_id',
			'step_number',
			'step_instructions',
			'I.ingredient_id',
			'ingredient_name',
			'ingredient_qty'
		);

	// !! Will come back when I have more time to figure this map out

	// const mapIngr = recipes.map((ingr) => {
	// 	if (ingr.ingredient_name === null) {
	// 		return null;
	// 	} else {
	// 		return `${ingr.ingredient_name} - ${ingr.ingredient_qty}`;
	// 	}
	// });

	// const recipesObj = {
	// 	recipe_name: recipes.map((rec) => {
	// 		return rec.recipe_name;
	// 	}),
	// };

	// const recipesObj = {
	// 	recipe_id: recipes[0].recipe_id,
	// 	recipe_name: recipes[0].recipe_name,
	// 	ingredients:
	// 		recipes[0].ingredient_name !== null
	// 			? mapIngr.filter((ingr) => ingr !== null)
	// 			: [],
	// 	steps:
	// 		recipes[0].step_id !== null
	// 			? recipes.map((step) => {
	// 					return {
	// 						step_number: step.step_number,
	// 						instructions: step.step_instructions,
	// 					};
	// 			  })
	// 			: [],
	// };
	// console.log(recipesObj);
	// return recipesObj;
}

async function findById(recipe_id) {
	const recipe = await db('rec_step_ingr as RSI')
		.leftJoin('recipes as R', 'R.recipe_id', 'RSI.recipe_id')
		.leftJoin('steps as S', 'S.step_id', 'RSI.step_id')
		.leftJoin('ingredients as I', 'I.ingredient_id', 'RSI.ingredient_id')
		.where({ 'R.recipe_id': recipe_id })
		.orderBy('step_number')
		.select(
			'R.recipe_id',
			'recipe_name',
			'S.step_id',
			'step_number',
			'step_instructions',
			'I.ingredient_id',
			'ingredient_name',
			'ingredient_qty'
		);

	const mapIngr = recipe.map((ingr) => {
		if (ingr.ingredient_name === null) {
			return null;
		} else {
			return `${ingr.ingredient_name} - ${ingr.ingredient_qty}`;
		}
	});

	const recipeObj = {
		recipe_id: recipe[0].recipe_id,
		recipe_name: recipe[0].recipe_name,
		ingredients:
			recipe[0].ingredient_name !== null
				? mapIngr.filter((ingr) => ingr !== null)
				: [],
		steps:
			recipe[0].step_id !== null
				? recipe.map((step) => {
						return {
							step_number: step.step_number,
							instructions: step.step_instructions,
						};
				  })
				: [],
	};
	console.log(recipeObj);
	return recipeObj;
}

module.exports = { findAll, findById };
