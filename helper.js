const db = require('./data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getById,
    getIngredients,
    getIngredientById,
    getSteps,
    getStepById,
    add,
    addSteps,
    update,
    remove,
}

function getRecipes() {
    return db("recipes")
};

function getShoppingList(recipe_id) {
    return db("recipes_ingredients")
        .join("ingredients", "ingredients.id", "recipes_ingredients.ingredient_id")
        .select("ingredients.ingredient_name", "ingredients.quantity")
        .where({ recipe_id })
}

function getInstructions(id) {
    return db("steps")
        .join("recipes", "recipes.id", "=", "steps.recipe_id")
        .select("recipes.recipe_name", "steps.step_number", "steps.step_description")
        .where({ "recipe_id": id })
}

function getById(id) {
    return db("recipes")
        .where({ id })
        .first()
}

function getIngredients() {
    return db("ingredients")
}

function getIngredientById(id) {
    return db("ingredients")
        .where({ id })
        .first()
}

function getSteps() {
    return db("steps")
}

function getStepById(id) {
    return db("steps")
        .where({ id })
        .first()
}

function add(recipes) {
    return db("recipes")
        .insert(recipes)
        .then(([id]) => {
            return getById(id)
        })
}

function addSteps(step, recipe_id) {
    return db("steps")
        .insert({ ...step, recipe_id })
        .then(Id => {
            return db("steps")
                .where({ id: Id[0] })
                .first()
                .then(addedStep => addedStep)
        })
}

function update(updating, id) {
    return db("recipes")
        .update(updating)
        .where({ id })
}


function remove(id) {
    return db("recipes")
        .where({ id })
        .delete()
}

// or
// function getInstructions(recipe_id) {
//     return db("steps")
//         .join("recipes", "recipes.id", "steps.recipe_id")
//         .select("recipes.recipe_name", "steps.step_number", "steps.step_description")
//         .where({ recipe_id })
// }