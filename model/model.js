const db = require("../data/config")

function getRecipeById(recipe_id) {
    return db("recipes as r")
        .leftJoin("steps as s", "s.recipe_id", "r.id")
        .leftJoin("ingredients as i", "i.step_id", "s.id")
        .where("r.id", recipe_id)
        .select(
            "r.name",
            "r.created",
            "i.ingredient_name",
            "i.quantity",
            "st.step_instructions",
            "st.step_number"
        )
}

module.exports = { getRecipeById }