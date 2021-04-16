exports.seed = function(knex) {
    return knex('steps').del()
    .then(function () {
        return knex('steps').insert([
            {step_number:1, instructions:"Put a large saucepan on a medium heat", recipe_id:1},
            {step_number:2, instructions:"Add 1 tbsp olive oil", recipe_id:1},
            {step_number:1, instructions:"Mix meat into balls", recipe_id:2},
            {step_number:2, instructions:"Fry them with olive oil", recipe_id:2},
            {step_number:3, instructions:"Add sauce at the end", recipe_id:2}
        ]);
    });
};