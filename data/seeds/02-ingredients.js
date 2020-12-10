exports.seed = function (knex, promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'Turkey'},
        { ingredient_name: 'Vegetables' },
        { ingredient_name: 'Marinara Sauce' },
        { ingredient_name: 'Cheese' },
        { ingredient_name: 'Salt' },
        { ingredient_name: 'Pepper'}
    ]);
};