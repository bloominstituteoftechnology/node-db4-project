exports.seed = function (knex) {
  return knex("ingredients").insert([
    {
      ingredient_name: "olive oil",
      quantity: 0.2,
    },
    {
      ingredient_name: "spaghetti noodles",
      quantity: 1,
    },
  ]);
};
