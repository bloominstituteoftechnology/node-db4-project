
exports.seed = function(knex, promise) {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {step_number: 1, step_instructions: 'lay out two pieces of bread', recipe_id: '1'},
        {step_number: 2,step_instructions: 'apply peanut butter', recipe_id: '1'},
        {step_number: 3,step_instructions: 'apply jelly', recipe_id: '1'},
        {step_number: 4,step_instructions: 'combine forces of PB and J!', recipe_id: '1'},
        {step_number: 1,step_instructions: 'Put steel cut oats in pot', recipe_id: '2'},
        {step_number: 2,step_instructions: 'Add water to pot', recipe_id: '2'},
        {step_number: 3,step_instructions: 'Bring water to a boil', recipe_id: '2'},
        {step_number: 4,step_instructions: 'Reduce heat to bring water down to a simmer, cover pot', recipe_id: '2'},
        {step_number: 5,step_instructions: 'Stir oats once every few minutes until the water is fully evaporated, enjoy your plain oatmeal', recipe_id: '2'}
      ]);
};
