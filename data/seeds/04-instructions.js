const instructions = [
    
]

exports.seed = async function(knex) {
    await knex('instructions').insert(instructions)
};
