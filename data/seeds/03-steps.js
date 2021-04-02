exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { step_number: 1, step_instructions: "cut galangal + open coconut milk", recipe_id: 1 },
        { step_number: 2, step_instructions: "coconut oil in pan and turn stove on low", recipe_id: 1 },
        { step_number: 1, step_instructions: "open tomato sauce and beans", recipe_id: 2 },
        { step_number: 2, step_instructions: "turn on slow cooker", recipe_id: 2 },
      ]);
    });
};
