const db = require("../data/config")

function getRecipe(){
    return db("recipes as r")
        .join("ingredients as i", "i.id", "r.ingredients_id")
        .select("r.id", "r.name", "i.name as ingredients_name")
}

function getRecipeById(id){
    return db("recipes as r")
        .where("r.id", id)
        .join("ingredients as i", "i.id", "r.ingredients_id")
        .first("r.id", "r.name", "i.name as ingredients_name")
}

function getShoppingList(){
    return db("recipes_ingredients as ri")
        .join("recipes as r", "ri.recipe_id", "r.id")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .select("i.name as ingredient", "ri.quantity")
        .where({"ri.recipe_id": recipe_id});
}

function getInstructions(id){
    return db("instructions as i")
        .where({"i.recipe_id": recipe_id})
        .orderBy("i.step_number", "asc")
}

module.exports = {
    getRecipe,
    getRecipeById,
    getShoppingList,
    getInstructions,
}