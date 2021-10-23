exports.seed = function(knex){
    return knex('recipe_steps').insert([
        {
            step_num: 1,
            step_instructions: 'Butter 2 slices of bread',
            recipe_id: 1
        },
        {
            step_num: 2,
            step_instructions: 'Place one slice of bread, butter side down, in skillet set to medium heat',
            recipe_id: 1
        },
        {
            step_num: 3,
            step_instructions: 'Place two slices of cheese on the bread in the skillet, now apply the second slice of bread butter side up',
            recipe_id: 1
        },
        {
            step_num: 4,
            step_instructions: 'flip periodically until golden brown',
            recipe_id: 1
        },
        {
            step_num: 5,
            step_instructions: 'enjoy with tomato soup',
            recipe_id: 1
        },
        {
            step_num: 1,
            step_instructions: 'open can',
            recipe_id: 2
        },
        {
            step_num: 2,
            step_instructions: 'pour soup in pot, add one can worth of water, cook on medium-high heat until warm',
            recipe_id: 2
        },
        {
            step_num: 3,
            step_instructions: 'pour in bowl and enjoy',
            recipe_id: 2
        }
    ])
}