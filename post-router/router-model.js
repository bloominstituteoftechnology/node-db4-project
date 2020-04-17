const db = require('../data/db-config');

// function find() {
//     return db('recipes');
// }

// function findById(id) {
//     return db('recipes').where({ id: Number(id) });
// }

// function add(recipe) {
//     return db('recipes')
//         .insert(posts, 'id')
//         .then(ids => ({id: ids[0]}));
// }

// function update(id, recipe) {
//     return db('recipes')
//         .where('id', Number(id))
//         .update(recipe);
// }

// function remove(id) {
//     return db('recipes')
//         .where("id", Number(id))
//         .del();
// }

function getRecipes() {
    return db('recipes')
  }

function getShoppingList(id) {
    return db('recipes AS r')
        .join('ingredients AS i', 'i.recipe_id', 'r.id')
        .select('r.recipe_name', 'i.ingredient_name', 'i.quantity')
        .where('r.id', id)
}

function getInstructions(id) {
    return db('recipes AS r')
        .join('steps AS s', 's.recipe_id', 'r.id')
        .select('r.recipe_name', 's.instructions', 's.step_number')
        .where('r.id', id)
        .orderBy('s.step_number')
  }

module.exports = {
    // find,
    // findById,
    // add,
    // update,
    // remove,
    getRecipes,
    getShoppingList,
    getInstructions
}