const steps = [
    // Spaghetti Bolognese
    { recipe_id: 1, step_number:1, step_instructions: "Put a large saucepan on a medium heat" },
    { recipe_id: 1, step_number:2, step_instructions: "Add 1 tbsp olive oil" },
    { recipe_id: 1, step_number:3, step_instructions: "Add 1 chopped onions" },
    { recipe_id: 1, step_number:3, step_instructions: "Add 1 chopped Bell-pepper" },
    { recipe_id: 1, step_number:3, step_instructions: "Add 1 bag of corns" },
    { recipe_id: 1, step_number:4, step_instructions: "Add sausage" },
    { recipe_id: 1, step_number:4, step_instructions: "Add chicken" }

    // Honey BBQ Chicken
    { recipe_id: 2, step_number: 1, instructions: 'marinate chicken in honey and bbq' }, 
    { recipe_id: 2, step_number: 2, instructions: 'Bake at 425F for 1 hour 20 minutes and occasionally pour a 1/4 cup of water in the baking pan' },

    // scrambled eggs
    { recipe_id: 3, step_number: 1, step_instruction: 'heat pan with medium flame',},
    { recipe_id: 3, step_number: 2, step_instruction: 'add butter' },
    { recipe_id: 3, step_number: 3, step_instruction: 'add eggs' },
    { recipe_id: 3, step_number: 4, step_instruction: 'scramble eggs' },
    { recipe_id: 3, step_number: 5, step_instruction: 'cook until fluffy' }
]

exports.seed = async function(knex) {
    await knex('steps').insert(steps)
};
