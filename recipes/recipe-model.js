const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
};

// returns a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  const id = recipe_id;

//   select r.name, i.name, ri.quantity from recipes as r
//   join recipe_ingredients as ri on r.id = ri.recipe_id
//   join ingredients as i on i.id = ri.ingredient_id
//   where r.id = 1

  return db('recipes as r')
    .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('r.name', 'i.name', 'ri.quantity')
    .where({"r.id": id})
};




function getInstructions(recipe_id) {};
