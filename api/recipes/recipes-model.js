const db = require('../../data/db-config')

module.exports = {
  getAll,
  getById,
  create
}

async function getAll () {
  const result = await db('recipes')
  // console.log("getALL----",result)
  return result
}

async function getById(id) {
  const result = await db('recipes').where('id', id).first()
  // console.log("getById---", result)
  return result
}

async function create(newRecipe) {
  const [id] = await db('recipe').insert(newRecipe)
  return getById(id)
}