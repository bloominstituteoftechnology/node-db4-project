exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("measurement_units").insert([
    { measurement_description: "cup" },
    { measurement_description: "cups" },
    { measurement_description: "teaspoon" },
    { measurement_description: "bunch" },
    { measurement_description: "pounds" },
    { measurement_description: "pound" },
    { measurement_description: "ounce" },
  ]);
};
