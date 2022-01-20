const step_ingredient = [
    // Chicken Alfredo Penne Pasta
    
]

exports.seed = async function(knex) {
    await knex('step_ingredient').insert(step_ingredient)
};
