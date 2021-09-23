exports.seed = function (knex, promise) {
  return knex("recipes").insert([
    { recipe_name: "Brocoli Pesto Pasta" },
    { recipe_name: "Lemon Chicken" },
    { recipe_name: "Salmon en Papillote" },
  ]);
};
