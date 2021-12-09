const db = require('../data/db-config.js');

function getRecipes() {
  return db('recipes');
}

function getRecipesById() { // INCLUDING SPECIES NAME
}


module.exports = {
  getRecipes,
  getRecipesById,
};
