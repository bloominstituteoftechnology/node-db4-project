exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { id: 1, name: "Bread" },
    { id: 2, name: "Cheese" },
    { id: 3, name: "Butter" },
    { id: 4, name: "Bacon" },
    { id: 5, name: "Eggs" },
  ]);
};
