const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db
    .select('*')
    .from('recipes')
}

function findById(id) {
    return db
    .select('*')
    .from('recipes')
    .where({ id })
}

function findSteps(id) {
    return db
    .select('*')
    .from('steps')
    .where({ id })
}

function add (user) {
    return db
    .insert(user)
    .into('recipes')
}

// function update (id, change) {
//     return db ('schemes')
//     .where({ id })
//     .update(change)
// }

function update(changes, id) {
    return db('recipes')
      .where({ id })
      .update(changes);
  }

function remove (id) {
    return db ('recipes')
    .where({ id })
    .del()
}