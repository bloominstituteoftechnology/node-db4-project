
exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'peanut butter serving', quantity: 1, step_id: 8 },
        { ingredient_name: 'Brownie Mix', quantity: 1, step_id: 1 },
        { ingredient_name: 'Bananas', quantity: 3, step_id: 4 },
        { ingredient_name: 'Bread slices', quantity: 4, step_id: 7 },
        { ingredient_name: 'Jelly', quantity: 1, step_id: 9 },
        { ingredient_name: 'Can of raw dough', quantity: 1, step_id: 11 },
        { ingredient_name: 'pepperonis', quantity: 20, step_id: 12 },
        { ingredient_name: 'whip cream', quantity: 1, step_id: 6 },
        { ingredient_name: 'butter', quantity: 1, step_id: 2 },
        { ingredient_name: 'milk', quantity: 1, step_id: 5 },
        { ingredient_name: 'ice cream', quantity: 1, step_id: 5 }
    ])
};
