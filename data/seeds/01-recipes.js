exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { id: 1, recipe_name: "Grilled Cheese Sandwich" },
    { id: 2, recipe_name: "Bacon & Eggs" },
  ]);
};
