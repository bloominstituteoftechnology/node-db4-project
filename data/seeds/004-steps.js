
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
        {recipe_id: 1, step_number: 1, description: "wash hands"},
        {recipe_id: 1, step_number: 1, description: "get ingredients"},
        {recipe_id: 1, step_number: 2, description: "put in oven"},
        {recipe_id: 2, step_number: 1, description: "wash hands"},
        {recipe_id: 2, step_number: 2, description: "eat food"},
      ]);
};
