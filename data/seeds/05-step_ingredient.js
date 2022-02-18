const step_ingredient = [
    // Spaghetti Bolognese - Recipe_id:1
    { step_id:1 },
    { step_id:2, ingredient_id:2, quantity:1 },
    { step_id:3, ingredient_id:3, quantity:1 },
    { step_id:3, ingredient_id:4, quantity:1 },
    { step_id:3, ingredient_id:5, quantity:1 },
    { step_id:4, ingredient_id:6, quantity:1 },
    { step_id:4, ingredient_id:7, quantity:1 },

]

exports.seed = async function(knex) {
    await knex('step_ingredient').insert(step_ingredient)
};
