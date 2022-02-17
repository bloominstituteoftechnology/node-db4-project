exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { ingredient_name: "eggs" },
        { ingredient_name: "flour" },
        { ingredient_name: "sugar" },
      ]);
    });
};
