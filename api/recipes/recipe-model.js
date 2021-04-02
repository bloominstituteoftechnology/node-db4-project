const db = require('../../data/db-config');

function findAll() {
	return db('rec_step_ingr as RSI')
		.leftJoin('recipes as R', 'R.recipe_id', 'RSI.recipe_id')
		.leftJoin('steps as S', 'S.step_id', 'RSI.step_id')
		.leftJoin('ingredients as I', 'I.ingredient_id', 'RSI.ingredient_id')
		.orderBy('R.recipe_id', 'step_number')
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
}

function findById(recipe_id) {
	return db('rec_step_ingr as RSI')
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
}

module.exports = { findAll, findById };
