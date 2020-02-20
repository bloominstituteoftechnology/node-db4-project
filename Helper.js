const db = require("./data/dbConfig")


function getRecipes() {
return db("recipes")
};

function getShoppingList(id) {
    return db('ingredients')
    .select("ingredientName", "quantity")
    .where({recipeId: id})
}
function getInstructions(id){
return db('steps')
    .select("recipeStep")
    .where({recipeId: id})
}
