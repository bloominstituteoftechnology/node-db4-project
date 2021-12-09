const recipes = [
  { recipe_name: 'Spaghetti Bolognese' },
  { recipe_name: 'Mac & Cheese' },
];

exports.seed = function (knex, Promise) {
  return knex('recipes').insert(recipes);
};
