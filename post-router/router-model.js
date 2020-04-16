const db = require('../data/db-config');

function find() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where({ id: Number(id) });
}

function add(recipe) {
    return db('recipes')
        .insert(posts, 'id')
        .then(ids => ({id: ids[0]}));
}

function update(id, recipe) {
    return db('recipes')
        .where('id', Number(id))
        .update(recipe);
}

function remove(id) {
    return db('recipes')
        .where("id", Number(id))
        .del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}