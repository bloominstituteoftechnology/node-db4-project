const db = require("../data/dbconfig.js");

//`getRecipes()`: should return a list of all recipes in the database.
//✅
const getAllRecipes = () => {
  return db("recipes");
};

const getAllIngredients = () => {
    return db("ingredients")
}

//`getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// having issues underingstanding how to write quiries. 
const getShoppingList = (id) => {
    return db("ingredients as i")
        .select("recipes.recipe_name as recipe", "i.name as ingredients")
        .join("recipes", "ria.recipe_ID", "recipes.id")
        .join("recipes_ingredient_amounts as ria", "i.id", "ria.ingredient_id")
        .where("recipe_ID", id)
// took me way to long to figure this out but it's working.  Basically i'm getting a recipe, and all of it's ingredients.  Not sure how to get the ingredient amounts yet. 
    }


module.exports = {
  getAllRecipes,
  getAllIngredients,
  getShoppingList
};
