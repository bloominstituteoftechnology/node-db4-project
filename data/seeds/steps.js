exports.seed = function (knex) {
  return knex("steps")
    .del()
    .then(function () {
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions: "bake at 350 degrees for 20 minutes",
        },
        {
          step_number: 2,
          step_instructions: "bake at 375 degrees for 30 minutes",
        },
        {
          step_number: 3,
          step_instructions: "bake at 400 degrees for 40 minutes",
        },
      ]);
    });
};
