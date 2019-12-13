
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()

    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_name: "Rock Soup",
          recipe_author: "chef for R D"
        },
        {
          recipe_name: "Burger n Grass",
          recipe_author: "Green Cook"
        }
      ]);
    });
};
