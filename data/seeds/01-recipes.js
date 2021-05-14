exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        { recipe_name: "Korean BBQ" },
        { recipe_name: "Pho" },
        { recipe_name: "Japanese Chicken Curry" },
        { recipe_name: "KFC(Korean Fried Chicken)" },
      ]);
    });
};
