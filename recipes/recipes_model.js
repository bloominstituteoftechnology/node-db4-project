const db = require("../data/config")

function getRecipes() {
    return db("Recipe_Details.Recipe_Id", "Recipe", "Ingredient", "Ingredient_Qty", "Unit",  "Step_Number", "Instruction").from("Recipe_Details")
        .join("Recipes", "Recipes.id", "Recipe_Details.Recipe_Id")
        .join("Ingredients", "Recipe_Details.Ingredient_id", "Ingredients.Id")
        .join("Instructions", "Recipe_Details.Recipe_Id", "Instructions.Recipe_Id")
        .orderBy("Recipe_Details.Recipe_Id")
}

function getShoppingList(recipe_id) {
    return db("Ingredient", "Ingredient_Qty").from("Ingredients")
        .join("Recipe_Details", "Ingredients.id", "Ingredient_Id")
        .where("Recipe_Details.Recipe_Id", recipe_id)
}

function getInstructions(recipe_id) {
    return db("Instruction").from("Instructions")
        .where("Recipe_Id", recipe_id)
        .orderBy("Step_Number")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}