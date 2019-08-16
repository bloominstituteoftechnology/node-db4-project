const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
};

// return a list of all ingredients and quantities for a given recipe

//   select r.name, i.name, ri.quantity from recipes as r
//   join recipe_ingredients as ri on r.id = ri.recipe_id
//   join ingredients as i on i.id = ri.ingredient_id
//   where r.id = 1
function getShoppingList(recipe_id) {
  const id = recipe_id;
  return db('recipes as r')
    .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('r.name as recipe', 'i.name as ingredient', 'ri.quantity')
    .where({"r.id": id});
};


// return a list of step by step instructions for preparing a recipe

// select r.name, s.step_number, s.instructions
// from recipes as r
// join steps as s on r.id = s.recipe_id
// where r.id = 1
// order by s.step_number
function getInstructions(recipe_id) {
  const id = recipe_id;
  return db('recipes as r')
    .join('steps as s', 'r.id', 's.recipe_id')
    .select('r.name', 's.step_number', 's.instructions')
    .where({"r.id": id})
    .orderBy('s.step_number');
};
