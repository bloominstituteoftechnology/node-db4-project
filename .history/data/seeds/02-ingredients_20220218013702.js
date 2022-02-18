exports.seed = function (knex, promise) {
    return knex('ingredients').insert
};
