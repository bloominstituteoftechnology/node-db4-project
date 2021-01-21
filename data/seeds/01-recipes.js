exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Omelette" },
    { recipe_name: "Scrambled Eggs" },
    { recipe_name: "Over Easy Eggs" },
  ]);
};
