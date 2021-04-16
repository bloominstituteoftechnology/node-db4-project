exports.seed = function(knex) {
    return knex('ingredients').del()
    .then(function () {
        return knex('ingredients').insert([
            {ingredient_name:"Spaghetti"},
            {ingredient_name:"Olive Oil"},
            {ingredient_name:"Sauce"},
            {ingredient_name:"Spices"},
            {ingredient_name:"Meat"}
        ]);
    });
};