const recipes = [
  { recipe_name: 'Caprese Salad' },
  { recipe_name: "Marcella Hazan's Tomato Sauce" },
  { recipe_name: 'Rice Krispy Treats' },
  { recipe_name: 'Nothing!' }
];

exports.recipes = recipes;

exports.seed = function(knex) {
  return knex('recipes').insert(recipes);
};
