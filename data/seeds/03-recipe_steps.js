
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { step_number: 1, step_instructions: 'Toast Bread' , recipe_id: 1},
    { step_number: 2, step_instructions: 'Heat oil in pan and fry egg in it' , recipe_id: 1 },
    { step_number: 3, step_instructions: 'Put eggs between slices of bread and enjoy', recipe_id: 1},
    { step_number: 1, step_instructions: 'Boil Water', recipe_id: 2},
    { step_number: 2, step_instructions: 'Put pasta in water and boil for time according to package. Strain when done.', recipe_id: 2},
    { step_number: 3, step_instructions: 'Heat sauce in a pan', recipe_id: 2},
    { step_number: 4, step_instructions: 'Combine pasta and sauce. Enjoy.', recipe_id: 2},
  ]);
};
