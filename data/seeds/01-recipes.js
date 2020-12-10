exports.seed = function (knex, promise) {
    return knex('recipes').insert([
        { recipe_name: 'Roast Turkey' },
        { recipe_name: 'Chicago Style Pizza' },
        { recipe_name: 'P&J Sandwich' },
        { recipe_name: 'Alfredo' }
    ]);
};