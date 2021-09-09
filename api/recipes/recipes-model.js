const db = require('../../data/db-config')

const getAll = async () => {
  return await db('recipes')
}

module.exports = {
  getAll
}
