exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { id: 1, ingredient_name: "Bread" },
    { id: 2, ingredient_name: "Cheese" },
    { id: 3, ingredient_name: "Butter" },
    { id: 4, ingredient_name: "Bacon" },
    { id: 5, ingredient_name: "Eggs" },
  ]);
};
