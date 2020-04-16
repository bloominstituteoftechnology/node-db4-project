const db = require("../data/dbconfig");


module.exports = {
    getRecipes,
    getRecipesbyId,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db("Recipes").select("*");
}
function getRecipesbyId(recipe_id){
    return db("Recipes").select("*").where({"id":recipe_id});
}

function getShoppingList(recipe_id){
    return db("Ingredients_recipes as IR")
        .select("I.Ingredient_name")
        .join("Ingredients as I", function(){
            this.on("I.id","=","IR.IngredientId")
        })
        .where({"IR.RecipeId": recipe_id})
        .then(data=>{
            return data;
        })
}

function getInstructions(recipe_id){

    return db("Steps")
        .select("Instructions","StepNumber")
        .where({"RecipeId":recipe_id})
        .then(data=>{
            return data;
        })
}