const db = require('../data/db.config');

const getRecipes = () => db('recipes');

module.exports = {
    getRecipes
}