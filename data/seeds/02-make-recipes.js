const recipes = [
    { recipe_name: 'Bacon Wrapped Asparagus' },
    { recipe_name: 'Pasta Carbonara' },
    { recipe_name: 'Loaded Baked Potato' },
]

const ingredients = [
    { ingredient_name: 'Bacon', ingredient_unit: "slices" },
    { ingredient_name: 'Asparagus', ingredient_unit: "spears" },
    { ingredient_name: 'Butter', ingredient_unit: "tablespoon" },
    { ingredient_name: 'Olive Oil', ingredient_unit: "tablespoon" },
    { ingredient_name: 'Cheddar Cheese', ingredient_unit: "cup" },
    { ingredient_name: 'Sour Cream', ingredient_unit: "cup" },
    { ingredient_name: 'Baked Potato', ingredient_unit: "whole" },
    { ingredient_name: 'Spagetti Noodles', ingredient_unit: "ounces" },
    { ingredient_name: 'Peas', ingredient_unit: "cup" },
    { ingredient_name: 'Eggs', ingredient_unit: "whole" },
]

const step_ingredients = [
    //Bacon Wrapped Asparagus
    { step_id: 1, ingredient_id: 1, quantity: 10 },
    { step_id: 2, ingredient_id: 2, quantity: 10 },
    //Pasta Carbonara
    { step_id: 7, ingredient_id: 1, quantity: 8 },
    { step_id: 8, ingredient_id: 10, quantity: 2 },
    { step_id: 8, ingredient_id: 5, quantity: 1 },
    { step_id: 9, ingredient_id: 8, quantity: 16 },
    { step_id: 9, ingredient_id: 9, quantity: 1 },
    //Loaded Baked Potato
    { step_id: 11, ingredient_id: 7, quantity: 4 },
    { step_id: 12, ingredient_id: 1, quantity: 8 },
    { step_id: 13, ingredient_id: 3, quantity: 4 },
    { step_id: 13, ingredient_id: 5, quantity: 4 },
    { step_id: 13, ingredient_id: 6, quantity: 4 },
]

const steps = [
    //Bacon Wrapped Asparagus
    { step_content: 'cook bacon on cooking sheet at 400 degrees', step_number: 1, recipe_id: 1},
    { step_content: 'prepare asparagus by washing and trimming', step_number: 2, recipe_id: 1},
    { step_content: 'cook asparagus ', step_number: 3, recipe_id: 1},
    { step_content: 'cook bacon', step_number: 4, recipe_id: 1},
    { step_content: 'wrap bacon around asparagus', step_number: 5, recipe_id: 1},
    //Pasta Carbonara
    { step_content: 'bring 4cts water to bowl', step_number: 1, recipe_id: 2},
    { step_content: 'cook bacon on cooking sheet at 400 degrees', step_number: 2, recipe_id: 2},
    { step_content: 'wisk together eggs and cheese', step_number: 3, recipe_id: 2},
    { step_content: 'boil noodles and frozen peas', step_number: 4, recipe_id: 2},
    { step_content: 'cook egg mixture on low heat slowly adding all ingredients', step_number: 5, recipe_id: 2},
    //Loaded Baked Potato
    { step_content: 'bake potato in foil at 350 degrees for an hour', step_number: 1, recipe_id: 3},
    { step_content: 'cook bacon on stovetop', step_number: 2, recipe_id: 3},
    { step_content: 'load cooked potato in order: butter, cheese, sour cream, bacon', step_number: 1, recipe_id: 3},
]


exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}