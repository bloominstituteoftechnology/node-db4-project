exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Water" },
    { ingredient_name: "Ramen Noodles Package" },
    { ingredient_name: "Egg" },
    { ingredient_name: "Transportation Method" },
  ]);
};
