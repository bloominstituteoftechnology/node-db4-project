exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("measurement_units").insert([
    { ingredient_id: 1, measurement_description: "cup" },
    { ingredient_id: 2, measurement_description: "cups" },
    { ingredient_id: 1, measurement_description: "teaspoon" },
    { ingredient_id: 2, measurement_description: "bunch" },
    { ingredient_id: 3, measurement_description: "pounds" },
    { ingredient_id: 3, measurement_description: "pound" },
    { ingredient_id: 3, measurement_description: "ounce" },
  ]);
};
