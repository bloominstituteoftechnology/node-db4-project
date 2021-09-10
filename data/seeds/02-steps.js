exports.seed = function(knex, Promise){
    return knex('steps').insert([
        {step_number: 1, step_instructions: 'Preheat oven', Recipe_id: 1},
        {step_number: 2, step_instructions: 'spread cheese on garlic bread loaf', Recipe_id: 1},
        {step_number: 3, step_instructions: 'Bake for 10 mins', Recipe_id: 1},
        {step_number: 4, step_instructions: 'Serve with cheese dip', Recipe_id: 1},
        {step_number: 1, step_instructions: 'cut strawberries', Recipe_id: 2},
        {step_number: 2, step_instructions: 'add sugar, fresh strawberries, syrup, cold milk', Recipe_id: 2},
        {step_number: 3, step_instructions: 'Blend everything and serve with Ice', Recipe_id: 2},
    ])
}