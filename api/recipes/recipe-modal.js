const db = require('../../data/db-config');

const find = () => {
    return db('recipes as r')
    .select('r.*', 'step_instructions')
    .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
    .groupBy('r.recipe_id')
    .orderBy('r.recipe_id', 'asc')
}

function findById () {

}

module.exports = {
    find,
    findById
}