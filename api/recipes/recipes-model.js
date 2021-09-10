const db = require("../../data/db-config");

const getById = (recipe_id) => {
  return db("recipes as r")
    .select("*")
    .join("steps as s", "s.recipe_id", "r.recipe_id")
    .leftJoin("steps_ingredients as si", "s.step_id", "si.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .where("r.recipe_id", recipe_id);
};

module.exports = {
  getById,
};
/*
select * 
from recipes as r
join steps as s
on s.recipe_id = r.recipe_id
left join steps_ingredients as si
on s.step_id = si.step_id
left join ingredients as i
on i.ingredient_id = si.ingredient_id
where r.recipe_id = 3;
*/
