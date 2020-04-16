const db = require("../data/dbconfig");


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db("Recipes").select("*");
}

function getShoppingList(recipe_id){
    return db("Recipes")
        .select("I.Ingredient_name")
        .from("Ingredients_recipes as IR")
        .join("Ingredients as I", function(){
            this.on("I.id","=","IR.IngredientId")
        })
        .where({"IR.RecipeId": recipe_id})
        .then(data=>{
            return data;
        })
}

function getInstructions(recipe_id){
    return db("Recipes")
        .select("s.Instructions","s.StepNumber")
        .from("Ingredients_recipes as ir")
        .join("Steps as s", function(){
            this.on("s.RecipeId", "=", "ir.RecipeId")
        }).where({"ir.RecipeId":recipe_id})
        .then(data=>{
            return data;
        })

}