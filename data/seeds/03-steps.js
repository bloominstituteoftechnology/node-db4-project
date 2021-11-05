exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: 1, instructions: "do the thing", recipe_id: 1 },
    { step_number: 2, instructions: "do the thing", recipe_id: 1 },
    { step_number: 3, instructions: "do the thing", recipe_id: 1 },
    { step_number: 1, instructions: "do the thing", recipe_id: 2 },
    { step_number: 2, instructions: "do the thing", recipe_id: 2 },
    { step_number: 1, instructions: "do the thing", recipe_id: 3 },
  ]);
};
