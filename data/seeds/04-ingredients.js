exports.seed = function(knex) {
  return knex('step_ingredients').truncate()
  .then(function () {
    return knex('ingredients').insert([   
      { ingredient_id: 1, ingredient_name: 'Water' },
      { ingredient_id: 2, ingredient_name: 'Chicken Breast' },
      { ingredient_id: 3, ingredient_name: 'Noodles' },
      { ingredient_id: 4, ingredient_name: 'Alfredo Sauce' },
    ]);
  });
};