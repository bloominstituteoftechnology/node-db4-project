const steps = [
    // Chicken Alfredo Penne Pasta
]

exports.seed = async function(knex) {
    await knex('steps').insert(steps)
};
