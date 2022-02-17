exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { recipe_name: "strawBerry Cake", created_at: "01/01/2021" },
      ]);
    });
};
