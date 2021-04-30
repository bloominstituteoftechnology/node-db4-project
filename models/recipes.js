const db = require("../data/config")

function getAll() {
  return db("recipes_variety as rv")
    .join("recipes as r", "r.id", "rv.recipe_id")
    .join("ingredients as i", "i.id", "rv.ingredient_id")
    .join("steps as s", "s.id", "i.id")
    .select("rv.id","recipe_name", "ingredient_name", "i.quantity as ingredient_quantity", "s.id as step_id", "step_instructions")
}

function getByID(id) {
  return db("recipes_variety as rv")
    .where("rv.id", id)
    .join("recipes as r", "r.id", "rv.recipe_id")
    .join("ingredients as i", "i.id", "rv.ingredient_id")
    .join("steps as s", "s.id", "i.id")
    .select("rv.id","recipe_name", "ingredient_name", "i.quantity as ingredient_quantity", "s.id as step_id", "step_instructions")
}


module.exports = {
  getAll,
  getByID
}