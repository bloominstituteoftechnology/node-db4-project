const db = require("../data/config");

function getShoppingList(recipe_id) {
	return db.select('ingredientName', 'quantity').from('ingredients').where('recipe_id', recipe_id);
}

module.exports = {
    getShoppingList,
}