const Recipes = require('./recipe-model');
const ExpressError = require('../ExpressError');

// ?? Check that recipe id exists, if not, throw error 404

const checkRecipeId = async (req, res, next) => {
	try {
		const recipe = await Recipes.findById(req, params.recipe_id);
		if (recipe) {
			req.recipe = recipe;
			next();
		} else {
			next(
				new ExpressError(
					`Recipe with ID ${req.params.recipe_id} does not exist`,
					404
				)
			);
		}
	} catch (err) {
		next(err, 500);
	}
};

module.exports = checkRecipeId;
