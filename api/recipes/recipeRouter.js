const express = require('express');
const { checkRecipeId } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router();

// ?? Get all recipes
router.get('/', (req, res, next) => {
	Recipes.findAll()
		.then((recipes) => {
			res.json(recipes);
		})
		.catch(next);
});

// ?? Get recipe by id
router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
	const { recipe_id } = req.params;

	Recipes.findById(recipe_id)
		.then((recipe) => {
			res.json(recipe);
		})
		.catch(next);
});

router.use((err, req, res, next) => {
	res.status(500).json({
		error: err.message,
		stack: err.stack,
	});
});
module.exports = router;
