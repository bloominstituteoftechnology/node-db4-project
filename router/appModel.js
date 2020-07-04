const db = require("../data/dbconfig.js");

//✅
const getAllRecipes = () => {
  return db("recipes");
};

const getAllIngredients = () => {
    return db("ingredients")
}

module.exports = {
  getAllRecipes,
  getAllIngredients
};
