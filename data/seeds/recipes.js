const recipes = [
  { recipe_name: "Cereal" },
  { recipe_name: "Oatmeal" },
  { recipe_name: "Buttered Toast" },
];

exports.recipes = recipes;

exports.seed = function (knex) {
  return knex("recipes").insert(recipes);
};
