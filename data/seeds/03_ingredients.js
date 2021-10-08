const ingredients = [
  { ingredient_name: 'cheese' },
  { ingredient_name: 'beef' },
  { ingredient_name: 'bun' },
  { ingredient_name: 'lettuce' },
  { ingredient_name: 'tomatoe' },
  { ingredient_name: 'onion' },
  { ingredient_name: 'pickles' },
  { ingredient_name: 'ketchup' }
]

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients);
};
