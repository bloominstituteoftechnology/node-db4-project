exports.seed = function(knex) {
  return knex('ingredients').truncate()
  .then(function () {
    return knex('ingredients').insert([   
      { ingredient_name: 'Water' },
      { ingredient_name: 'Chicken Breast' },
      { ingredient_name: 'Noodles' },
      { ingredient_name: 'Alfredo Sauce' },
    ]);
  });
};