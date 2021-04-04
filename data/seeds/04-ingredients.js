exports.seed = function(knex,Promise){
    return knex('ingredients').insert([
        { ingredients_id: 1 ,ingredients_name:"Potatoes",  quantity: 4},
        { ingredients_id: 2 ,ingredients_name:"Tomatoes",  quantity: 6},
        { ingredients_id: 3 ,ingredients_name:"Flour",  quantity: 0.050},
        { ingredients_id:4 ,ingredients_name:"Olive Oil",  quantity: 0.014},
        { ingredients_id: 5,ingredients_name:"Crushed Red Pepper",  quantity: 0.70 },
        { ingredients_id: 6 ,ingredients_name:"Sugar",  quantity: 0.420},
        { ingredients_id: 7,ingredients_name:"Almond Milk",  quantity: 4 },
    ])
}