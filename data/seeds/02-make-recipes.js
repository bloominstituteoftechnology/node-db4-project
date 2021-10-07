const recipes = [
    { recipe_name: 'Grilled Cheese' },
    { recipe_name: 'Spaghetti aglio e olio' },
    { recipe_name: 'Blueberry Banana Smoothie' },
]

const ingredients = [
    { ingredient_name: 'Sourdough Bread' },
    { ingredient_name: 'Butter' },
    { ingredient_name: 'Cheese' },
    { ingredient_name: 'Salt' },
    { ingredient_name: 'Pasta' },
    { ingredient_name: 'Garlic' },
    { ingredient_name: 'Olive Oil' },
    { ingredient_name: 'Blueberries' },
    { ingredient_name: 'Banana' },
    { ingredient_name: 'Ice Cubes' },
    { ingredient_name: 'Almond Milk' },
]

const step_ingredients = [
    // Grilled Cheese
    { step_id: 1, ingredient_id: 2, quantity: '2 tbl'},
    { step_id: 2, ingredient_id: 1, quantity: '2 slices'},
    { step_id: 3, ingredient_id: 3, quantity: '4 slices'},
    // Spaghetti aglio e olio
    { step_id: 5, ingredient_id: 4, quantity: '3 pinches'},
    { step_id: 6, ingredient_id: 5, quantity: '1 box'},
    { step_id: 7, ingredient_id: 6, quantity: 'a lot'},
    { step_id: 7, ingredient_id: 7, quantity: 'good amount'},
    // Blueberry Banana Smoothie
    { step_id: 8, ingredient_id: 8, quantity: '1 cup'},
    { step_id: 8, ingredient_id: 9, quantity: '1 full'},
    { step_id: 9, ingredient_id: 10, quantity: '6 cubes'},
    { step_id: 10, ingredient_id: 11, quantity: '8oz'},
    
]

const steps = [
    // Grilled Cheese
    { step_instructions: 'Heat pan, melt butter', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Put bread in butter', step_number: 2, recipe_id: 1 },
    { step_instructions: 'Add cheese, cook slowly till cheese is melted and gooey', step_number: 3, recipe_id: 1 },
    // Spaghetti aglio e olio
    { step_instructions: 'Boil water', step_number: 1, recipe_id: 2 },
    { step_instructions: 'Add salt to water', step_number: 2, recipe_id: 2 },
    { step_instructions: 'Cook Pasta', step_number: 3, recipe_id: 2 },
    { step_instructions: 'Mix with Garlic and Oil', step_number: 4, recipe_id: 2 },
    // Blueberry Banana Smoothie
    { step_instructions: 'Put Blueberries and Banana in Blender', step_number: 1, recipe_id: 3 },
    { step_instructions: 'Add Ice Cubes', step_number: 2, recipe_id: 3 },
    { step_instructions: 'Add Almond Milk', step_number: 3, recipe_id: 3 },
    { step_instructions: 'Blend!', step_number: 4, recipe_id: 3 },
]


exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}
