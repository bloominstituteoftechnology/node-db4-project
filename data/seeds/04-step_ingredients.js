exports.seed = function(knex, Promise) {
    return knex('step_ingredients').insert([
        {step_id:1, ingredient_id:1, quantity:'1 cup'},
        {step_id:2, ingredient_id:2, quantity:'1 cup'},
        {step_id:4, ingredient_id:3, quantity:'1 can'},
        {step_id:4, ingredient_id:4, quantity:'2 tablespoons'},
        {step_id:6, ingredient_id:5, quantity:'8 oz'},
        {step_id:7, ingredient_id:6, quantity:'1 scoop'},
        {step_id:8, ingredient_id:7, quantity:'2 tablespoons'},
        {step_id:9, ingredient_id:8, quantity:'1 tablespoon'}
    ])
}