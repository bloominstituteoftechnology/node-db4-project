exports.seed = function(knex,Promise){
    return knex('steps').insert([
        {step_id:1,ingredients_id: 1 ,  step_instructions: "Put a large saucepan on a medium heat"},
        {step_id:2,ingredients_id: 2 , step_instructions: "Whisk ingredients together"},
        {step_id:3,ingredients_id: 3 , step_instructions: "simmer for 10 minutes"},
        {step_id:4,ingredients_id: 4 , step_instructions: "Cut ingredients"},
        {step_id:5,ingredients_id: 5 ,  step_instructions: "Leave out to cool for 10 minute"},
        {step_id:6, ingredients_id: 6 , step_instructions: "Boil water"},
        {step_id:7, ingredients_id: 7 , step_instructions: "Heat oven to 420"},
    ])
}