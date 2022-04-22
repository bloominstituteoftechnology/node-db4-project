
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredient_name: 'Big Potatoes',
          quantity: '3-4 cups',
          step_id: 1 
        },
        {
          ingredient_name: 'Frying Oil',
          quantity: '2 cups',
          step_id: 3 
        },
        {
          ingredient_name: 'Salt',
          quantity: '1-2 tsp',
          step_id: 4 
        },
        {
          ingredient_name: 'Black Pepper',
          quantity: '1-2 tsp',
          step_id: 4 
        },
        {
          ingredient_name: 'Eggs',
          quantity: '4-5',
          step_id: 5 
        },
        {
          ingredient_name: 'Cold Water',
          quantity: '2-3 cups',
          step_id: 6 
        },
        {
          ingredient_name: 'Cold Water',
          quantity: '2-3 cups',
          step_id: 9 
        },
        {
          ingredient_name: 'Salt',
          quantity: '1 pinch',
          step_id: 10 
        },
        {
          ingredient_name: 'Pepper',
          quantity: '1 pinch',
          step_id: 10 
        },
        {
          ingredient_name: 'Cereal',
          quantity: '1-2 ounces',
          step_id: 12 
        },
        {
          ingredient_name: 'Milk',
          quantity: '1-2 cups',
          step_id: 13 
        },
      ]);
    });
};
