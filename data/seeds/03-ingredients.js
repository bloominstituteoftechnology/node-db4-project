
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'pasta', step_id: 1 },
    { ingredient_name: 'water', step_id: 1 },
    { ingredient_name: 'olive oil', step_id: 1 },
    { ingredient_name: 'marinara sauce', step_id: 4 },
    { ingredient_name: 'tortilla', step_id: 5 },
    { ingredient_name: 'monterey jack', step_id: 5 },
    { ingredient_name: 'cheddar', step_id: 5 },
    { ingredient_name: 'vegetable oil', step_id: 7 },
  ]);
};
