const db = require("../data/config");

function getRecipes() {
	return db("recipes");
}
function getShoppingList(recipeId) {
	return db("ingredients as i").where("recipeId", recipeId).select(["i.ingredient"]);
}

function getInstructions(recipeId) {
	return db("instructions as i")
		.where("recipeId", recipeId)
		.select(["i.instruction"]);
}


module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
};
