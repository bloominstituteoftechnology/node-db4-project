const step_ingredients = [
  {
    quantity_id: 1,
    quantity: "2 knives worth of peanut butter",
    ingredient_id: 2,
    step_id: 1,
  },
  {
    quantity_id: 2,
    quantity: "2 pieces of bread",
    ingredient_id: 3,
    step_id: 2,
  },
  {
    quantity_id: 3,
    quantity: "2 knives worth of jelly",
    ingredient_id: 1,
    step_id: 3,
  },
];

exports.step_ingredients = step_ingredients;

exports.seed = function (knex) {
  return knex("step_ingredients").insert(step_ingredients);
};
