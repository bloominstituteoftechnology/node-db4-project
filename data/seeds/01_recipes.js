const recipes = [
  { recipe_name: 'Cheeseburger' },
]

exports.seed = function(knex) {
  return knex('recipes').insert(recipes);
};
