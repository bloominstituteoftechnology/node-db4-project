exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { recipe_id: 1, step_number: 1, description: "put the pasta in the water" },
        { recipe_id: 1, step_number: 2, description: "strain the cooked pasta" },
        { recipe_id: 1, step_number: 3, description: "sauce it up, boss!" }
      ]);
    });
};
