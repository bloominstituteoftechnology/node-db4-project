
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {recipe_id: 1, step_id: 1, step_order_position: 1},
        {recipe_id: 1, step_id: 2, step_order_position: 2},
        {recipe_id: 1, step_id: 7, step_order_position: 3},
        
        {recipe_id: 2, step_id: 1, step_order_position: 1},
        {recipe_id: 2, step_id: 2, step_order_position: 2},
        {recipe_id: 2, step_id: 5, step_order_position: 3},
        
        {recipe_id: 3, step_id: 1, step_order_position: 1},
        {recipe_id: 3, step_id: 6, step_order_position: 2},
        {recipe_id: 3, step_id: 7, step_order_position: 3}
      ]);
    });
};
