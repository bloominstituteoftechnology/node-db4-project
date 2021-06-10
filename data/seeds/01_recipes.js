exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "food 1" },
        { recipe_name: "food 2" },
        { recipe_name: "food3" },
      ]);
    });
};
