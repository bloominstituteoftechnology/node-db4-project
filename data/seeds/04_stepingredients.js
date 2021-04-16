exports.seed = function(knex) {
    return knex('stepingredients').del()
    .then(function () {
        return knex('stepingredients').insert([
            {step_id:2, ingredient_id:2, amount:"1 tablespoon"},
            {step_id:3, ingredient_id:5, amount:"4 ounces"},
            {step_id:4, ingredient_id:2, amount:"1 tablespoon"},
            {step_id:5, ingredient_id:4, amount:"A dash"},
            {step_id:5, ingredient_id:3, amount:"1 cup"}
        ]);
    });
};