const db = require('../data/db.config');

const getRecipes = () => db('recipes');

const getIngredientsByRecipeId = (recipe_id) => {
// SELECT * 
// FROM ingredients as i
// LEFT JOIN recipe_book as rb
//     ON rb.ingredient_id = i.ingredient_id
// WHERE rb.recipe_id = {recipe_id};
    return db('ingredients as i')
        .leftJoin('recipe_book as rb', {
            'rb.ingredient_id':'i.ingredient_id'
        })
        .where('rb.recipe_id', recipe_id)
}

const getRecipeById = async (recipe_id) => {

};

module.exports = {
    getRecipes,
    getIngredientsByRecipeId
};