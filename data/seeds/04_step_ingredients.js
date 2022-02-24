exports.seed = async function (knex) {
    return await knex('step_ingredients').insert([
        { 
            quantity: '2 slices', 
            ingredient_id: 1, 
            step_id: 1 
        },
        { 
            quantity: '1tbsp', 
            ingredient_id: 2, 
            step_id: 2 
        },
        { 
            quantity: '1tbsp', 
            ingredient_id: 3, 
            step_id: 3 
        },
        { 
            quantity: '1/2 cup', 
            ingredient_id: 4, 
            step_id: 5 
        },
        { 
            quantity: '1 cup', 
            ingredient_id: 5, 
            step_id: 5 
        },
        { 
            quantity: '1tbsp', 
            ingredient_id: 6, 
            step_id: 7 
        },
        { 
            quantity: '1tbsp', 
            ingredient_id: 7, 
            step_id: 7 
        },
        { 
            quantity: '1 slice', 
            ingredient_id: 1, 
            step_id: 8 
        },
        { 
            quantity: '1tbsp', 
            ingredient_id: 8, 
            step_id: 9 
        },
        { 
            quantity: '1tsp', 
            ingredient_id: 7, 
            step_id: 10 
        },
        { 
            quantity: '1tsp', 
            ingredient_id: 9, 
            step_id: 10 
        }
    ])
  }