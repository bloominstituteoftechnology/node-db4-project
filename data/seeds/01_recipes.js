exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Ramen Noodles" },
    { recipe_name: "Boiled Egg" },
    { recipe_name: "Fast Food" },
  ]);
};
