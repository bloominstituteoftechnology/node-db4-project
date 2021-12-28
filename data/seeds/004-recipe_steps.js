exports.seed = function (knex, Promise){
    return knex('recipe_steps').insert([
        {step_number: 1, step_instructions: 'Toast Bread', recipe_id: 1},
        {step_number: 2, step_instructions: 'Roast meat and let marinate in au jus', recipe_id: 1},
        {step_number: 3, step_instructions: 'Place Chuck Roast on toasted bread', recipe_id: 1},
        {step_number: 1, step_instructions: 'Boil Water', recipe_id: 2},
        {step_number: 2, step_instructions: 'Put pasta in water and boil until soft. Drain Water.', recipe_id: 2},
        {step_number: 3, step_instructions: 'Heat sauce in pan', recipe_id: 2},
        {step_number: 4, step_instructions: 'Combine pasta and sauce. Ready to serve.', recipe_id: 2}
    ])
}