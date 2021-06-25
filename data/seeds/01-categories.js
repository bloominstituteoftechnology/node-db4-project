exports.seed = function (knex) {
  return knex("categories").insert([
    { category_name: "Breakfast" },
    { category_name: "Lunch" },
    { category_name: "Dinner" },
    { category_name: "Snack" },
  ]);
};
