const db = require('../../data/db-config');

exports.getRecipeById = function() {
  return db('recipes')
};
