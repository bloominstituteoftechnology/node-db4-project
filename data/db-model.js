const db = require('../data/db-config')


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    findRecipesId,
    findIngredientId,
    getIngredients


}


function getRecipes(){
// SELECT * FROM recipes;

  return  db('recipes')
    .select('*')

}

function findRecipesId(id){
    return db('recipes')
            .select('*')
            .where({id})//returns ARRAY
            .first()//returns just the one!
}

function getShoppingList(recipe_id){
//     SELECT 
//     recipe_name as 'Recipe'
// ,   ingredient_name as 'Ingredient'
// ,   quantity_ingredients as 'Quantity' 
// FROM recipe_ingredients as ri

// JOIN recipes as r
// ON r.id = ri.recipe_id

// JOIN ingredients as i
// ON i.id = ri.ingredient_id
// ;
    return db('recipe_ingredients')
            .select('*')
            .join('recipes', 'recipes.id','recipe_ingredients.recipe_id')
            .join('ingredients', 'ingredients.id','recipe_ingredients.ingredient_id')
            .where({recipe_id})
            


}

function getIngredients(ingredient_id){
    //     SELECT 
    //     recipe_name as 'Recipe'
    // ,   ingredient_name as 'Ingredient'
    // ,   quantity_ingredients as 'Quantity' 
    // FROM recipe_ingredients as ri
    
    // JOIN recipes as r
    // ON r.id = ri.recipe_id
    
    // JOIN ingredients as i
    // ON i.id = ri.ingredient_id
    // ;
        return db('recipe_ingredients')
                .select('ingredient_name', 'recipe_name')
                .join('recipes', 'recipes.id','recipe_ingredients.recipe_id')
                .join('ingredients', 'ingredients.id','recipe_ingredients.ingredient_id')
                .where({ingredient_id})
                
    
    
    }

function findIngredientId(id){
    return db('ingredients')
            .select('*')
            .where({id})//returns ARRAY
            .first()//returns just the one!
}

function getInstructions(recipe_id){
//     SELECT 
//     r.recipe_name as 'Recipe'
// ,   s.step_name as 'Step'
// ,   rs.step_order_position as 'Step Number'
// FROM recipe_instructions as rs


// JOIN recipes as r
// ON r.id = rs.recipe_id

// JOIN instructions as s
// ON s.id = rs.step_id
// ;
    return db('recipe_instructions')
            .select('*')
            .join('recipes', 'recipes.id','recipe_instructions.recipe_id')
            .join('instructions', 'instructions.id', 'recipe_instructions.step_id')
            .where({recipe_id})

}