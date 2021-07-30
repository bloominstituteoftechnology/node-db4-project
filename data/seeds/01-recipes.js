exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipes: "mums recipe", dish_id: 1 },
        { recipes: "cookbook1 recipe", dish_id: 2 },
        { recipes: "cookbook73 recipe", dish_id: 3 },
      ]);
    });
};
