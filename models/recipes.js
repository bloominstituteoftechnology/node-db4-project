const db = require("../data/config");

function getRecipes() {
	return db.select('recipeName').from('recipes');
}

function getInstructions(recipe_id) {
	return db.select('recipeInstructions').from('recipes').where('id', recipe_id);
}

module.exports = {
	getRecipes,
	getInstructions,
}