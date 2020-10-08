exports.seed = function (knex) {
  const instructions = [
    {
      instructions: "1 Foo bar, 2 foo bar, 3 foo bar,",
      recipe_id: 1,
    },
    {
      instructions: "1 Foo bar, 2 foo bar, 3 foo bar,",
      recipe_id: 2,
    },
  ];

  return knex("instructions").insert(instructions);
};
