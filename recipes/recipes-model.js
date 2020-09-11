const db = require('../data/db-config'); 

module.exports = {
    find,
    findById,
    findShoppingList,
    add, 
    update, 
    remove
};

//! Finding functions !// 
function find(){
    return db('recipes'); 
}; 

function findById(id){
    return db('recipes')
        .where({ id })
        .first();
}; 

function findShoppingList(id) {
    return db('recipes_ingredients')
        .join('recipes', 'recipes.id', 'recipe_id')
        .join('ingredients', 'ingredients.id', 'ingredient_id')
        .select('ingredients.ingredient_name', 'recipes_ingredients.quantity', 'ingredients.type')
        .where('recipes.id', id);
}; 

//! Manipulating functions !// 
function add(recipe){
    return db('recipes')
        .insert(recipe, 'id')
        .then(([id]) => {
            return findById(id);
        });
}; 

function update(changes, id){
    return db('recipes')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id); 
        });
}; 

function remove(id){
    return db('recipes')
        .where({ id })
        .del();
};