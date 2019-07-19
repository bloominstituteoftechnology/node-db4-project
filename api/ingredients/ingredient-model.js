const db = require('../../data/db-config.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findRecipes,
};

function find() {
  return db('ingredients');
}

function findById(id) {
  return db('ingredients')
    .where('id', id)
    .first()
    .then(ingredient => {
      if (ingredient) {
        return ingredient;
      } else {
        return null;
      }
    });
}

function add(ingredient) {
  return db('ingredients')
    .insert(ingredient)
    .then(([id]) => this.findById(id));
}

function update(id, changes) {
  return db('ingredients')
    .where('id', id)
    .update(changes)
    .then(successFlag => (successFlag > 0 ? this.findById(id) : null));
}

function remove(id) {
  return !findById(id)
    ? null
    : db('ingredients')
        .where('id', id)
        .del();
}

function findRecipes(id) {
  return db('recipes_ingredients as ri')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .where('ingredient_id', id)
    .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity')
    .orderBy('r.id', 'asc');
}
