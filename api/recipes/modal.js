const db = require("../../data/db-config")

const findRecipeById = id => {
    return db("recipes as r")
        .leftJoin("steps as s", "s.recipe_id", "r.recipe_id")
        .leftJoin("step_ingredients as si", "si.step_id", "si.step_id")
        .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
        .where("r.recipe_id", id)
        .select("r.*", "s.step_instructions", 
        "s.step_id", "s.step_number",
        "si.igredient_id", "si.quantity",
        "i.ingredient_name")
        .orderBy("s.step_number")
}
module.exports = findRecipeById