const db = require('../../data/db-config');

function find() {
  return db('recipes');
}

module.exports = {
  find,
  getRecipeById,
};
