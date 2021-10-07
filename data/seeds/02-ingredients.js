const ingredients = [
  { ingredient_id: 1, ingredient_name: "jelly" },
  { ingredient_id: 2, ingredient_name: "peanut butter" },
  { ingredient_id: 3, ingredient_name: "bread" },
];

exports.ingredients = ingredients;

exports.seed = function (knex) {
  return knex("ingredients").insert(ingredients);
};
