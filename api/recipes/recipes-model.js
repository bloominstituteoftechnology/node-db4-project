const db = require("../../data/db-config.js");

const find = () => {
  return db("recipes as r")
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .join("ingredients_steps_by_recipe as isr", "s.recipe_id", "isr.recipe_id")
    .join("ingredients as i", "i.ingredient_id", "isr.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "s.step_id",
      "s.step_number",
      "s.step_instructions",
      "i.ingredient_id",
      "i.ingredient_name",
      "isr.quantity"
    )
    .orderBy("isr.recipe_id");
};
module.exports = {
  find,
};
/*
select 
    r.recipe_id, r.recipe_name, s.step_id, s.step_number, s.step_instructions, i.ingredient_id, i.ingredient_name, isr.quantity
from recipes as r
left join steps as s
    on r.recipe_id = s.recipe_id
join ingredients_steps_by_recipe as isr
    on s.recipe_id = isr.recipe_id
join ingredients as i
    on i.ingredient_id = isr.ingredient_id

*/
