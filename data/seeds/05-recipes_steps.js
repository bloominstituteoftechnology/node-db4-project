exports.seed = async function(knex) {
  await knex("recipes_steps").insert([
    { recipe_id: 1, step_id: 1 },
    { recipe_id: 1, step_id: 2 },
    { recipe_id: 1, step_id: 3 },
    { recipe_id: 2, step_id: 4 },
    { recipe_id: 2, step_id: 5 },
    { recipe_id: 2, step_id: 6 },
    { recipe_id: 3, step_id: 3 },
    { recipe_id: 3, step_id: 4 },
    { recipe_id: 3, step_id: 7 }
  ]);
};
