exports.seed = function(knex) {
  return knex("steps")
    .truncate()
    .then(function() {
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description: "Select and open box of cereal"
        },
        {
          recipe_id: 1,
          step_number: 2,
          description: "Pour the cereal into a bowl"
        },
        { recipe_id: 1, step_number: 3, description: "Add milk" }
      ]);
    });
};
