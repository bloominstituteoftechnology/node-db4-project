const db = require('../../data/db-config.js');
const dbStepsHelper = require('../steps/step-model.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  addStep,
  addIngredient,
  removeIngredient,
  findShoppingList,
  findSteps,
};

function find() {
  return db('recipes');
}

function findById(id) {
  return db('recipes')
    .where('id', id)
    .first()
    .then(recipe => {
      if (recipe) {
        return recipe;
      } else {
        return null;
      }
    });
}

function add(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(([id]) => this.findById(id));
}

function update(id, changes) {
  return db('recipes')
    .where('id', id)
    .update(changes)
    .then(successFlag => (successFlag > 0 ? this.findById(id) : null));
}

function remove(id) {
  return !findById(id)
    ? null
    : db('recipes')
        .where('id', id)
        .del();
}

function addStep(recipe_id, step) {
  return db('steps')
    .insert({ ...step, recipe_id: recipe_id })
    .then(([step_id]) => dbStepsHelper.findById(step_id));
}

function addIngredient(recipe_id, ingredient_id, quantity) {
  return db('recipes_ingredients')
    .insert({
      recipe_id,
      ingredient_id,
      quantity,
    })
    .then(() => this.findShoppingList(recipe_id));
}

function removeIngredient(recipe_id, ingredient_id) {
  return db('recipes_ingredients')
    .where({ recipe_id, ingredient_id })
    .del()
    .then(successFlag =>
      successFlag > 0 ? this.findShoppingList(recipe_id) : null,
    );
}

function findShoppingList(id) {
  return db('recipes_ingredients as ri')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .where('recipe_id', id)
    .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity')
    .orderBy('i.id');
}

function findSteps(id) {
  return db('steps as s')
    .join('recipes as r', 's.recipe_id', 'r.id')
    .where('recipe_id', id)
    .select('r.recipe_name', 's.step_number', 's.instruction')
    .orderBy('step_number');
}
