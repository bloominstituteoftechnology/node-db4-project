exports.seed = function (knex) {
  return knex("steps").insert([
    { step_number: 1, step_instructions: "assemble", recipe_id: 1 },
    { step_number: 2, step_instructions: "bake", recipe_id: 1 },
    { step_number: 3, step_instructions: "eat", recipe_id: 1 },
  ]);
};
