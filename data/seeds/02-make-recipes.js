const recipes = [
    {recipe_name: 'Yummy Soup'},
    {recipe_name: 'Mashed Taters'},
    {recipe_name: 'Nutrient Slurry'}
];

const ingredients = [
    { ingredient_name: 'bone broth', unit_measurement: 'cups' },
    { ingredient_name: 'potato', unit_measurement: 'lb' },
    { ingredient_name: 'butter', unit_measurement: 'tbsp' },
    { ingredient_name: 'sour cream', unit_measurement: 'tbsp' },
    { ingredient_name: 'tofu', unit_measurement: 'cups' },
    { ingredient_name: 'chicken', unit_measurement: 'lb' },
    { ingredient_name: 'pesto', unit_measurement: 'tbsp' },
    { ingredient_name: 'cheese', unit_measurement: 'oz' },
    { ingredient_name: 'onion', unit_measurement: 'cups' },
    { ingredient_name: 'garlic', unit_measurement: 'tbsp' },
]
const steps = [
    { instructions: 'Boil broth', step_number: 1, recipe_id: 1 },
    { instructions: 'Add potato, onion, garlic, and tofu', step_number: 2, recipe_id: 1 },
    { instructions: 'Heat on medium for two hours', step_number: 3, recipe_id: 1 },
    { instructions: 'Peel potatoes', step_number: 1, recipe_id: 2 },
    { instructions: 'Boil potatoes', step_number: 2, recipe_id: 2  },
    { instructions: 'Mash potatoes', step_number: 3, recipe_id: 2  },
    { instructions: 'Stir in butter, sour cream, and garlic', step_number: 4, recipe_id: 2  },
    { instructions: 'Heat giant skillet', step_number: 1, recipe_id: 3 },
    { instructions: 'Add onion and garlic', step_number: 2, recipe_id: 3 },
    { instructions: 'Add cheese and tofu', step_number: 3, recipe_id: 3 },
    { instructions: 'Add chicken and pesto', step_number: 4, recipe_id: 3 },
    { instructions: 'Add sour cream and cheese', step_number: 5, recipe_id: 3 },
    { instructions: 'Stir and cook until mush', step_number: 6, recipe_id: 3 },
]
const quantities = [
    { step_id: 1, ingredient_id: 1, quantity: 6 },
    { step_id: 2, ingredient_id: 2, quantity: 1},
    { step_id: 2, ingredient_id: 5, quantity: 2},
    { step_id: 2, ingredient_id: 9, quantity: 1},
    { step_id: 2, ingredient_id: 10 , quantity: 3},
    { step_id: 4, ingredient_id: 2, quantity: 4},
    { step_id: 7, ingredient_id: 3, quantity: 4},
    { step_id: 7, ingredient_id: 4, quantity: 6},
    { step_id: 7, ingredient_id: 10, quantity: 4},
    { step_id: 9, ingredient_id: 9, quantity: 1},
    { step_id: 9, ingredient_id: 10, quantity: 1},
    { step_id: 10, ingredient_id: 5, quantity: 1},
    { step_id: 11, ingredient_id: 6, quantity: 1},
    { step_id: 12, ingredient_id: 4, quantity: 1}, 
    { step_id: 10, ingredient_id: 8, quantity: 1},
    { step_id: 11, ingredient_id: 7, quantity: 1},
    { step_id: 12, ingredient_id: 8, quantity: 1}, 
]
exports.seed = async function (knex) {
    await knex('recipes').insert(recipes);
    await knex('ingredients').insert(ingredients);
    await knex('steps').insert(steps);
    await knex('quantities').insert(quantities);
}