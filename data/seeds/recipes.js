exports.seed = function(knex){
    return knex('recipes').insert([
        {recipe_name: 'Grilled Cheese'},
        {recipe_name: 'Tomato Soup'}
    ])
}