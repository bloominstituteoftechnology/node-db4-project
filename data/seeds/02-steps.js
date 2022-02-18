exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { num_steps: 1, instructions: "find items", recipe_id: 1 },
        { num_steps: 2, instructions: "mix items", recipe_id: 1 },
        { num_steps: 3, instructions: "bake items", recipe_id: 1 },
      ]);
    });
};
