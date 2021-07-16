exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Flour" },
    { ingredient_name: "Water" },
    { ingredient_name: "Yeast" },
    { ingredient_name: "Egg" },
    { ingredient_name: "Bagel" },
    { ingredient_name: "Mayo" },
    { ingredient_name: "Salt and Pepper" },
  ]);
};
