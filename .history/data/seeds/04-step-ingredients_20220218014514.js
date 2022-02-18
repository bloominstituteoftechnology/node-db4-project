exports.seed = function (knex) {
    return knex('step_ingredients').insert([
        // Carbonara
        { 
            step_id: 1, ingredient_id: 1, quantity: 320 },
        { 
            step_id: 2, ingredient_id: 2, quantity: 6 },
        { 
            step_id: 3, ingredient_id: 3, quantity: 150 },
        { 
            step_id: 2, ingredient_id: 4, quantity: 50 },
        { 
            step_id: 5, ingredient_id: 5, quantity: 'add ' },
        // Cacio e Pepe
        { 
            step_id: 5, ingredient_id: 6, quantity: 320 },
        { 
            step_id: 7, ingredient_id: 5, quantity: 'add ' },
        { 
            step_id: 8, ingredient_id: 1, quantity: 1 },
        { 
            step_id: 9, ingredient_id: 7, quantity: 'add ' },
        // Puttanesca
        { 
            step_id: 10, ingredient_id: 6, quantity: 320 },
        { 
            step_id: 11, ingredient_id: 8, quantity: 10 },
        { 
            step_id: 12, ingredient_id: 9, quantity: 25 },
        { 
            step_id: 13, ingredient_id: 10, quantity: 3 },
        { 
            step_id: 14, ingredient_id: 11, quantity: 30 },
        { 
            step_id: 15, ingredient_id: 12, quantity: 800 },
        { step_id: 16, ingredient_id: 13, quantity: 1 },
        { step_id: 17, ingredient_id: 14, quantity: 100 },
        { step_id: 18, ingredient_id: 15, quantity: 2 },
        { step_id: 19, ingredient_id: 7, quantity: 'add ' },
    ];)
};
