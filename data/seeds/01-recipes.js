
exports.seed = function (knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Chocolate Brownies' },
        { recipe_name: 'Banana Smoothie' },
        { recipe_name: 'peanut butter toast' },
        { recipe_name: 'Deep dish pizza' }
    ]);
};
