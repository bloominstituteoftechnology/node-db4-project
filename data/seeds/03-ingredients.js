exports.seed = function(knex, Promise){
    return knex('ingredients').insert([
        {ingredient_name: 'Garlic bread loaf'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'fresh strawberries'},
        {ingredient_name: 'cold milk'},
        {ingredient_name: 'strawberry syrup'},
        {ingredient_name: 'ice'},
        {ingredient_name: 'sugar'}
    ])
}