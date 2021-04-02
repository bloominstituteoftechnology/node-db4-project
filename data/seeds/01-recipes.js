exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Grassfed Thai beef curry" },
        { recipe_name: "Beef stew" },
      ]);
    });
};
