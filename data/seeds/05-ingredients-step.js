const ingredients_step = [  

]

exports.seed = async function(knex) {
    await knex('ingredients_step').insert(ingredients_step)
};
