exports.seed = function (knex) {
  return knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "Put a large saucepan on a medium heat",
      recipie_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "Add 1 tbsp olive oil",
      recipie_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "boil your noodles",
      recipie_id: 1,
    },
  ]);
};
