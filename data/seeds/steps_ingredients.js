const steps_ingredients = [
  { step_id: 1, ingredient_id: 1, ingredient_quantity_mg: 150 },
  { step_id: 2, ingredient_id: 2, ingredient_quantity_mg: 300 },
  { step_id: 3, ingredient_id: 1, ingredient_quantity_mg: 300 },
  { step_id: 4, ingredient_id: 3, ingredient_quantity_mg: 200 },
  { step_id: 7, ingredient_id: 4, ingredient_quantity_mg: 250 },
  { step_id: 8, ingredient_id: 5, ingredient_quantity_mg: 50 },
];

exports.steps_ingredients = steps_ingredients;

exports.seed = function (knex) {
  return knex("steps_ingredients").insert(steps_ingredients);
};
