exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredientName: "water" },
        { id: 2, ingredientName: "sugar" },
        { id: 3, ingredientName: "flour" },
        { id: 4, ingredientName: "apple" },
        { id: 5, ingredientName: "salt" },
        { id: 6, ingredientName: "baking soda" },
        { id: 7, ingredientName: "lemon" },
        { id: 8, ingredientName: "butter" },
        { id: 9, ingredientName: "milk" }
      ]);
    });
};
