
exports.seed = function (knex, Promise) {
    return knex('recipes_steps').insert([
        { step_id: 1, recipe_id: 1 },
        { step_id: 2, recipe_id: 1 },
        { step_id: 3, recipe_id: 1 },
        { step_id: 4, recipe_id: 2 },
        { step_id: 5, recipe_id: 2 },
        { step_id: 6, recipe_id: 2 },
        { step_id: 7, recipe_id: 3 },
        { step_id: 8, recipe_id: 3 },
        { step_id: 9, recipe_id: 3 },
        { step_id: 10, recipe_id: 4 },
        { step_id: 11, recipe_id: 4 },
        { step_id: 12, recipe_id: 4 }
    ]);
};
