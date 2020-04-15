exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { id: 1, name: "Grilled Cheese Sandwich" },
    { id: 2, name: "Bacon & Eggs" },
  ]);
};
