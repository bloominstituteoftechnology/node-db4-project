const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db("recipes")
}

function findById(id) {
    return db("recipes")
     .where({ id })
     .first()
}

function findSteps(id) {
    return db("steps as s")
        .join("recipes as r", "r.id", "s.recipe_id")
        .select(
            "r.name", 
            "s.id as step_id", 
            "s.step_number", 
            "s.instructions"
            )
        .where({ id })
        .orderBy("s.step_number")
}

function add(recipe) {
    return db("recipes")
        .insert(recipe)
        .then(ids => {
            return findById(ids[0]);
        })
}

function addStep(step, id) {
    const addedStep = {...step, recipe_id: id}
    return db("steps")
        .insert(addedStep)
        .then(() => {
            return findSteps(id)
        })
}

function update(changes, id) {
    return db("recipes")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("recipes")
        .where({ id })
        .del()
}