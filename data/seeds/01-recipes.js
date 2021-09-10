exports.seed = function(knex, Promise){
    return knex('recipes').insert([
        {recipe_name: 'cheese Garlic Breaad'},
        {recipe_name: 'strawberry milkshake'}
    ])
}