const db = require('./../../../data/db-config');

function getSteps(recipe_id){
    return db('steps')
        .select('step_num', 'step_text')
        .where('recipe_id', recipe_id)
}

function createStep(newStep){}

function updateStep(updatedStep){}

function deleteStep(deletedStep){}

module.exports = {
    getSteps,
    createStep,
    updateStep,
    deleteStep
}