const ingredients = [
    // Chicken Alfredo Penne Pasta
    { 
        ingredients_id: 1,
        ingredients_name: 'penne pasta, uncooked',
        ingredients_unit: 'lbs'
    }
]

exports.seed = async function(knex) {
    await knex('ingredients').insert(ingredients)
};