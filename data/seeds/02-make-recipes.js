const recipes = [
    { recipe_name: 'Weird Soup'},
    { recipe_name: 'Fun Soup'},
    { recipe_name: 'Weird Salad'},
]

const ingredients = [
    { ingredient_name: 'Corn', ingredient_unit: 'lbs' },
    { ingredient_name: 'Bubble Gum', ingredient_unit: 'lbs' },
    { ingredient_name: 'Fish Scales', ingredient_unit: 'lbs' },
    { ingredient_name: 'Leaves', ingredient_unit: 'slices' },
    { ingredient_name: 'Rice', ingredient_unit: 'kilos' },
    { ingredient_name: 'Gravel', ingredient_unit: 'grams' },
]

const step_ingredients = [
    // Weird Soup
    { step_id: 2, ingredient_id: 1, quantity: 1},
    { step_id: 3, ingredient_id: 2, quantity: 1.5},
    { step_id: 3, ingredient_id: 3, quantity: 2},
    // Fun Soup
    { step_id: 5, ingredient_id: 4, quantity: 1},
    { step_id: 5, ingredient_id: 5, quantity: 0.4},
    // Weird Salad
    { step_id: 7, ingredient_id: 6, quantity: 1},
]

const steps = [
    // Weird Soup
    { step_text: 'Dance', step_number: 1, recipe_id: 1 },
    { step_text: 'Chant', step_number: 2, recipe_id: 1 },
    { step_text: 'Throw ingredients into the sky', step_number: 3, recipe_id: 1 },
    // Fun Soup
    { step_text: 'Live', step_number: 1, recipe_id: 1 },
    { step_text: 'Laugh', step_number: 2, recipe_id: 1 },
    { step_text: 'Love', step_number: 3, recipe_id: 1 },
    // Weird Salad
    { step_text: 'Make a weird salad', step_number: 1, recipe_id: 1 },
    { step_text: 'Tell your friends about it', step_number: 2, recipe_id: 1 },
]

exports.seed =  async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
};
