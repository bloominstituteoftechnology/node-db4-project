exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        { category_name: "Breakfast" },
        { category_name: "Lunch" },
        { category_name: "Dinner" },
        { category_name: "Snack" },
      ]);
    });
};
