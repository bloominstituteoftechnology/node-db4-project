exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { recipe_name: "Cookie" },
    { recipe_name: "Pizza" },
    { recipe_name: "Brownie" },
  ]);
};
