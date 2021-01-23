const db = require("../../data/db-config.js");

module.exports = {
  getIngredients,
  getbyId,
};

function getIngredients() {
  return db("ingredients");
}

function getbyId(id) {
  return db("ingredients").where("id", id).first();
}
