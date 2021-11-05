exports.seed = function(knex, Promise) {
    return knex("recipes").insert([
        { recipe_name: 'Pepperoni Pizza'},
        { recipe_name: "Capt'n Crunch"},
        { recipe_name: 'Grilled Cheese'}
    ])
}