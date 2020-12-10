exports.seed = function(knex, Promise) {
    return knex('steps & ingredients').insert([
        { quantity: '2g', ingredient_id: 3, step_id: 2 },
        { quantity: '4g', ingredient_id: 5, step_id: 5 },
    ]);
};
