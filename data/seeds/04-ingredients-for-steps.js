exports.seed = function(knex, Promise) {
    return knex('ingredients_for_steps').insert([
      { step_id: 1, ingredient_id: 1, quantity: 1, quantity_unit: "lb"},
      { step_id: 2, ingredient_id: 2, quantity: 1, quantity_unit: "cup"},
      { step_id: 3, ingredient_id: 3, quantity: .75, quantity_unit: "lbs"},
      { step_id: 4, ingredient_id: 4, quantity: 20, quantity_unit: "pepperoni"},
      { step_id: 6, ingredient_id: 5, quantity: 3, quantity_unit: "cups"},
      { step_id: 7, ingredient_id: 6, quantity: .5, quantity_unit: "liters"},
      { step_id: 8, ingredient_id: 7, quantity: 2, quantity_unit: "slices"},
      { step_id: 8, ingredient_id: 8, quantity: 2, quantity_unit: "tbsp"},
      { step_id: 9, ingredient_id: 3, quantity: 1, quantity_unit: "slice"}
    ]);
  };