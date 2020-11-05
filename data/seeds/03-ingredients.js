exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "yams" },
    { ingredient_name: "milk" },
    { ingredient_name: "butter" },
    { ingredient_name: "sugar" },
    { ingredient_name: "flour" },
  ]);
};
