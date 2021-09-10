exports.seed = function(knex, Promise){
    return knex('step_ingredients').insert([
        {quantity: 1 , ingredient_id: 1, step_id: 2},
        {quantity: 1 , ingredient_id: 2, step_id: 2},
        {quantity: 4 , ingredient_id: 3, step_id: 5},
        {quantity: 1.5 ,ingredient_id: 4, step_id: 6},
        {quantity: 3 , ingredient_id: 6, step_id: 7},
    ])
}