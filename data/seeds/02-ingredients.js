
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredients_name: "salmon" },
        { ingredients_name: "beef ears" },
        { ingredients_name: "hot sauce" },
        { ingredients_name: "goat cheese" },
        { ingredients_name: "deer milk" },
        { ingredients_name: " eagle eggs" },
        { ingredients_name: "corn teeth" }
      ]);
    });
};
