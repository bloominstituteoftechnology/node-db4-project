const db = require("../../data/db-config.js");

module.exports = {
  getIngredients,
  getById,
};

function getIngredients() {
  return db("ingredients");
}

function getById(id) {
  return db("ingredients").where("id", id).first();
}
