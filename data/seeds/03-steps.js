exports.seed = function(knex,Promise){
    return knex('steps').insert([
        {step_id:1,step_number:1,  step_instructions: "Put a large saucepan on a medium heat"},
        {step_id:2,step_number:5, step_instructions: "Whisk ingredients together"},
        {step_id:3,step_number:12,  step_instructions: "simmer for 10 minutes"},
        {step_id:4,step_number:27,  step_instructions: "Cut ingredients"},
        {step_id:5,step_number:32,  step_instructions: "Leave out to cool for 10 minute"},
        {step_id:6, step_number:6, step_instructions: "Boil water"},
        {step_id:7, step_number:7, step_instructions: "Heat oven to 420"},
    ])
}