exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { id: 1, recipeID: 1, ingredientID: 2, quantity: 150 },
        { id: 2, recipeID: 1, ingredientID: 9, quantity: 200 },
        { id: 3, recipeID: 1, ingredientID: 8, quantity: 175 },
        { id: 4, recipeID: 1, ingredientID: 3, quantity: 250 },
        { id: 5, recipeID: 1, ingredientID: 4, quantity: 4 },
        { id: 6, recipeID: 2, ingredientID: 1, quantity: 200 },
        { id: 7, recipeID: 2, ingredientID: 3, quantity: 200 },
        { id: 8, recipeID: 2, ingredientID: 5, quantity: 5 },
        { id: 9, recipeID: 2, ingredientID: 6, quantity: 3 },
        { id: 10, recipeID: 3, ingredientID: 7, quantity: 30 },
        { id: 11, recipeID: 3, ingredientID: 1, quantity: 200 },
        { id: 12, recipeID: 3, ingredientID: 2, quantity: 15 }
      ]);
    });
};
