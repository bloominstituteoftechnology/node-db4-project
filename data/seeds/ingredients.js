const ingredients = [
  { ingredient_name: "milk" },
  { ingredient_name: "cereal" },
  { ingredient_name: "oats" },
  { ingredient_name: "bread" },
  { ingredient_name: "butter" },
];

exports.ingredients = ingredients;

exports.seed = function (knex) {
  return knex("ingredients").insert(ingredients);
};
