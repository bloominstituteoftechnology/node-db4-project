exports.seed = async knex => {
  await knex("steps").insert([
    {
      instructions: "Stir till boiling",
      step_number: 1,
      recipe_id: 2
    },
    {
      instructions: "Put in a pan",
      step_number: 3,
      recipe_id: 1
    },
    {
      instructions: "Leave for one hour to cool down",
      step_number: 2,
      recipe_id: 2
    }
  ]);
};
