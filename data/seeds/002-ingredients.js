
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {quantity: 1, ingredients: "Cup of Flour", recipe_id: 1},
        {quantity: 1, ingredients: "Tablespoon of Sugar", recipe_id: 1},
        {quantity: 1, ingredients: "Cup of Milk", recipe_id: 1},
        {quantity: 1, ingredients: "Real Maple Syrup", recipe_id: 1},
        {quantity: 1, ingredients: "Egg", recipe_id: 1},
        {quantity: 5, ingredients: "Potato", recipe_id: 2},
        {quantity: 4, ingredients: "Cup of Oil", recipe_id: 2},
        {quantity: 1, ingredients: "Tablespoon of Salt", recipe_id: 2},
        {quantity: 2, ingredients: "Cup Vanilla Ice Cream", recipe_id: 3},
        {quantity: 1, ingredients: "Cup of Milk", recipe_id: 3},
        {quantity: 1, ingredients: "Tablespoon Vanilla", recipe_id: 3},
      ]);
    });
};
