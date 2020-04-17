const db = require("../data/seeds/dbConfig");

function getAll() {
  return db("ingredients");
}

function getById(ingredient_id) {
  return db("ingredients").where({ id: ingredient_id });
}

function add(ingredient) {
  return db("ingredients").insert(ingredient);
}

function remove(ingredient_id) {
  return db("ingredients").where({ id: ingredient_id }).del();
}

module.exports = {
  getAll,
  getById,
  add,
  remove,
};