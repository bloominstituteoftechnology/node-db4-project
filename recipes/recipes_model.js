const db = require("../data/config")

function getRecipes() {
    return db("*").from("Recipes")
        .leftJoin("Recipe_Details", "Recipes.id", "RecipeDetails.Recipe_Id")
        .groupBy("Recipes.id")
        .orderBy("Recipes.id")
        .leftJoin("Ingredients", "Recipe_Details.Ingredient_id", "Ingredients.Id")
        .groupBy("RecipeDetails.RecipeId")
        .orderBy("RecipeDetails.RecipeId")
        .leftJoin("Instructions", "Recipes.id", "Instructions.Recipe_Id")
        .groupBy("Recipes.id")
        .orderBy("Recipes.id")
}

function getShoppingList(recipe_id) {
    return db("Ingredient", "Ingredient_Qty").from("Ingredients")
        .join("Recipe_Details", "Ingredients.id", "Ingredient_Id")
        .where("Ingredients.id", recipe_id)
}

function getInstructions(recipe_id) {
    return db("Instruction").from("Instructions")
        .where("Instructions.Recipe_Id", recipe_id)
        .orderBy("Instructions.Step_Number")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}