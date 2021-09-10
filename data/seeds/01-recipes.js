const recipes = [{ recipe_name: "pb&j" }];

exports.recipes = recipes;

exports.seed = function (knex) {
  return knex("recipes").insert(recipes);
};
