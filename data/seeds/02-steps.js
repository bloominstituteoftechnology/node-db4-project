exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_instruction: "marinate beef ribs",
          step_number: 1,
        },
        {
          recipe_id: 2,
          step_instruction: "boil beef bones in pot",
          step_number: 1,
        },
        {
          recipe_id: 3,
          step_instruction: "parboil chicken thighs",
          step_number: 1,
        },
        {
          recipe_id: 1,
          step_instruction: "start grill",
          step_number: 2,
        },
        {
          recipe_id: 1,
          step_instruction: "wash lettuce",
          step_number: 3,
        },
      ]);
    });
};
