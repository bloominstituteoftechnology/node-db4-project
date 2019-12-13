const db = require('../data/db-config');



  const getRecipes = () => {
    return db("recipes").select("*");
  };

  const getShoppingList = id => {
    return db
      .select(
        "ingredients.ingredient_name",
        "recipe_ingredients.quantity",
        "recipe_ingredients.unit_of_measurement"
      )
      .from("recipe_ingredients")
      .join(
        "ingredients",
        "ingredients.id",
        "=",
        "recipe_ingredients.ingredient_id"
      )
      .where("recipe_ingredients.recipe_id", id);
  };
  
  const getInstructions = id => {
    return db
      .select("instructions.*")
      .from("instructions")
      .join("recipes", "recipes.id", "=", "instructions.recipe_id")
      .where("recipes.id", id)
      .orderBy("step_order");
  };

  module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  };