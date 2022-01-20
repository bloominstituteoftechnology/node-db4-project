const step_ingredient = [
    // Spaghetti Bolognese
    { step_id:1 },
    { step_id:2, ingredient_id:2, quantity:1 },
    { step_id:3, ingredient_id:3, quantity:1 },
    { step_id:3, ingredient_id:4, quantity:1 },
    { step_id:3, ingredient_id:5, quantity:1 },
    { step_id:4, ingredient_id:6, quantity:1 },
    { step_id:4, ingredient_id:7, quantity:1 },

    // Honey BBQ Chicken
    { recipe_ingredients_id: 8, steps_id: 2, quantity: '1 Whole chicken' },
    { recipe_ingredients_id: 9, steps_id: 1, quantity: '1/4 - 1/3 cup or desired amount of honey' },
    { recipe_ingredients_id: 10, steps_id: 1, quantity:'1/2 - whole standard bottle of BBQ Sauce' }

    // scrambled eggs
    { recipe_ingredients_id: 11, steps_id: 3, quantity: '3' }
]

exports.seed = async function(knex) {
    await knex('step_ingredient').insert(step_ingredient)
};
