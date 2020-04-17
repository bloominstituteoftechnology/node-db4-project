const db = require('../data/db-config.js');

function find() {
    return db('recipes');
};

function findById(id) {
    return db('recipes').where({ id });
};

function findIngredients(id){
    return db('recipe-ingredient as ri')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('i.ingredient-name')
    .where({'ri.recipe_id':id});
};

// returns the ingredient and the recipe name 
// function findIngredients(id){
//     let v = db('recipe-ingredient as ri')
//     .join('ingredients as i', 'i.id', 'ri.ingredient_id')
//     .join('recipes as r', 'r.id', 'ri.recipe_id')
//     .where ('r.id',id)
//     .select('i.ingredient-name', 'r.recipe-name');
//     console.log(v.toString())
//     return v;
// };

function findInstructions(id){
    return db('recipe-instruction as ri')
    .join('instructions as i', 'i.id', 'ri.instruction_id')
    .select('i.instruction', 'i.step')
    .where({'ri.recipe_id':id})
    .orderBy('i.step', 'desc');
    //.orderBy('i.step', 'desc');

};
function findRecipeIngredient(id){
    return db('recipe-ingredient as ri')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .select('r.recipe-name')
    .where({'ri.ingredient_id':id})
}

module.exports = {
    find,
    findById,
    findIngredients,
    findInstructions,
    findRecipeIngredient
};
