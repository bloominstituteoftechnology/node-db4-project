const ingredients = [
    // Spaghetti Bolognese
    { ingredient_name: 'Olive oil', ingredient_unit: 'tbsp' },
    { ingredient_name: 'Onion', ingredient_unit: 'grams' },
    { ingredient_name: 'Bell-pepper', ingredient_unit: 'grams' },
    { ingredient_name: 'Corn', ingredient_unit: 'bag' },
    { ingredient_name: 'Sausage', ingredient_unit: 'slices' },
    { ingredient_name: 'Chicken', ingredient_unit: 'lbs' }

    // Honey BBQ Chicken
    { ingredient_name: 'BBQ Sauce', ingredient_unit: 'cup' }, 
    { ingredient_name: 'Natural Honey', ingredient_unit: 'cup' },
    { ingredient_name: 'Whole Chicken', ingredient_unit: 'whole' }

    // scrambled eggs
    { ingredient_name: 'eggs', ingredient_unit: 'eggs' }
]

exports.seed = async function(knex) {
    await knex('ingredients').insert(ingredients)
};