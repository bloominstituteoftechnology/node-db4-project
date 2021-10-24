
exports.seed = function (knex, Promise) {
    return knex('steps').insert([
        { step_instructions: 'Stir brownie mix', step_number: 1 },
        { step_instructions: 'Put butter into brownie mix', step_number: 2 },
        { step_instructions: 'Put mix into oven for 2 hours', step_number: 3 },
        { step_instructions: 'Chop up bananas into slices', step_number: 1 },
        { step_instructions: 'Mix bananas, milk, and ice cream in blender', step_number: 2 },
        { step_instructions: 'After blended, add whip cream and enjoy', step_number: 3 },
        { step_instructions: 'Toast bread', step_number: 1 },
        { step_instructions: 'Spread peanut butter on toast', step_number: 2 },
        { step_instructions: 'Add some jelly if you like', step_number: 3 },
        { step_instructions: 'Slice pepperonis', step_number: 1 },
        { step_instructions: 'Spin dough to soften it', step_number: 2 },
        { step_instructions: 'Put all ingredients on dough, bake in oven for 3 hours', step_number: 3 }
    ]);
};
