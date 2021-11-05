exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "sando", created_at: 1 },
    { recipe_name: "sando1", created_at: 2 },
    { recipe_name: "sando2", created_at: 3 },
  ]);
};
