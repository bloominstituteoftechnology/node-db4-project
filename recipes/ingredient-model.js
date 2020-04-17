const db = require("../data/db-config.js");

module.exports = {
    getIngredients,
    getIngredientsById
}

function getIngredients() {
    db("ingredients")
}

function getIngredientsById(id) {
    return db("ingredients")
        .where({ id })
        .first()
}

//GET /api/ingredients/:id/recipes