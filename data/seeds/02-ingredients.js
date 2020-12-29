xports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        { ingredient_name: 'chicken'},
        { ingredient_name: 'sugar'},
        { ingredient_name: 'olive oil'}
      ]);
    });
};