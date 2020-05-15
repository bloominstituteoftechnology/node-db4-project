exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          step_number: 1,
          instruction: "pour little of olive olive on pan while heating",
          recipes_id: 1,
        },
        { step_number: 2, instruction: "fry eggs on it", recipes_id: 1 },
        {
          step_number: 1,
          instruction: "prepare pan and turn stove on",
          recipes_id: 2,
        },
        { step_number: 2, instruction: "put bacon on it", recipes_id: 2 },
      ]);
    });
};
