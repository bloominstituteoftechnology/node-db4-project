const db = require('../data/db-config')

// const getRecipeById = (recipe_id) => {
const getRecipeById = () => {
  console.log('inside model')
  return db('recipes')
}





module.exports = {
  getRecipeById
}