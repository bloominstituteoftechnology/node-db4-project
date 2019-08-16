
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, qaunity: 1, measurement: 'tablespoon' },
    { recipe_id: 1, ingredient_id: 2, qaunity: 1, measurement: 'pint' },
    { recipe_id: 1, ingredient_id: 3, qaunity: 1 },
    { recipe_id: 1, ingredient_id: 4, qaunity: 1 },
    { recipe_id: 1, ingredient_id: 5, qaunity: 4 },
    { recipe_id: 1, ingredient_id: 6, qaunity: 1.25, measurement: 'cup' },
    { recipe_id: 1, ingredient_id: 10, qaunity: 1, measurement: '12inches' },
    { recipe_id: 1, ingredient_id: 11, qaunity: 1, measurement: 'ounces' },
    { recipe_id: 2, ingredient_id: 7, qaunity: 2, measurement: 'thighs' },
    { recipe_id: 2, ingredient_id: 3, qaunity: 1 },
    { recipe_id: 2, ingredient_id: 4, qaunity: 1 },
    { recipe_id: 2, ingredient_id: 8, qaunity: 1 },
    { recipe_id: 2, ingredient_id: 9, qaunity: 1.5, measurement: 'cups' },
    { recipe_id: 2, ingredient_id: 10, qaunity: 1, measurement: '12 inches' },
    { recipe_id: 2, ingredient_id: 11, qaunity: 1.5, measurement: 'ounces' },   
    { recipe_id: 3, ingredient_id: 8, qaunity: 8, measurement: 'wedges' },
    { recipe_id: 3, ingredient_id: 2, qaunity: 1, measurement: 'pint' },
    { recipe_id: 3, ingredient_id: 1, qaunity: 1, measurement: 'tablespoon' },
    { recipe_id: 3, ingredient_id: 3, qaunity: 1 },
    { recipe_id: 3, ingredient_id: 4, qaunity: 1 },
    { recipe_id: 3, ingredient_id: 13, qaunity: 1, measurement: '15 ounces' },
    { recipe_id: 3, ingredient_id: 6, qaunity: 1.25, measurement: 'cup ' },
    { recipe_id: 3, ingredient_id: 11, qaunity: 2, measurement: 'ounces ' },
  ]);
};
