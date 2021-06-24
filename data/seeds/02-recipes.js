exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Cereal" },
        { recipe_name: "Toast" },
        { recipe_name: "Soup" },
        { recipe_name: "Oatmeal" },
        { recipe_name: "Cereal" },
      ]);
    });
};
