const ingredients = [
    // Spaghetti Bolognese
    { ingredient_name: 'Olive oil', ingredient_unit: 'tbsp' },
    { ingredient_name: 'Onion', ingredient_unit: 'grams' },
    { ingredient_name: 'Bell-pepper', ingredient_unit: 'grams' },
    { ingredient_name: 'Corn', ingredient_unit: 'bag' },
    { ingredient_name: 'Sausage', ingredient_unit: 'slices' },
    { ingredient_name: 'Chicken', ingredient_unit: 'lbs' },

]

exports.seed = async function(knex) {
    await knex('ingredients').insert(ingredients)
};