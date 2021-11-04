exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Brocoli", ingredient_unit: "lbs" },
    { ingredient_name: "Pesto", ingredient_unit: "lbs" },
    { ingredient_name: "Pasta", ingredient_unit: "lbs" },
    { ingredient_name: "Lemon", ingredient_unit: "slices" },
    { ingredient_name: "Chicken", ingredient_unit: "kilos" },
    { ingredient_name: "Salmon", ingredient_unit: "grams" },
  ]);
};
