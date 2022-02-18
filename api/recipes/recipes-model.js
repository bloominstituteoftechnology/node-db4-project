const db = require('../../data/db-config')
module.exports = {
    findById,
}

async function findById(id){
    return db('recipes as r').where("recipe_id", id)
}