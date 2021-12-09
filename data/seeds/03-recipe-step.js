
exports.seed = function(knex, Promise) {
  return knex('recipe_steps').insert([   
    { step_number: 1, step_instructions: 'Toast Bread' , recipe_id: 1},
    { step_number: 2, step_instructions: 'Roast meat and let marinate in au jus.' , recipe_id: 1 },
    { step_number: 3, step_instructions: 'Place chuck roast on toasted bread.', recipe_id: 1},
    { step_number: 1, step_instructions: 'Boil Water', recipe_id: 2},
    { step_number: 2, step_instructions: 'Put pasta in water and boil for time according to package. Strain when done.', recipe_id: 2},
    { step_number: 3, step_instructions: 'Heat sauce in a pan', recipe_id: 2},
    { step_number: 4, step_instructions: 'Combine pasta and sauce.', recipe_id: 2},
  ]);
};