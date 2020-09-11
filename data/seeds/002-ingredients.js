
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'eggs', type: 'each'},
        {id: 2, ingredient_name: 'asparagus', type: 'lbs'},
        {id: 3, ingredient_name: 'milk', type: 'ounces'},
        {id: 4, ingredient_name: 'feta cheese', type: 'ounces'},
        {id: 5, ingredient_name: 'hashbrowns', type: 'lbs'},
        {id: 6, ingredient_name: 'bread', type: 'slices'},
        {id: 7, ingredient_name: 'peanut butter', type: 'ounces'},
        {id: 8, ingredient_name: 'jelly', type: 'ounces'}, 
        {id: 1, ingredient_name: 'ramen noodles', type: 'each'}, 
        {id: 1, ingredient_name: 'water', type: 'ounces'}
      ]);
    });
};
