const recipes = [
    {recipe_name: 'grilled cheese'},
    {recipe_name: 'baked chicken'},
    {recipe_name: 'chicken caesar salad'},
    {recipe_name: 'mac n cheese'}
  ]

const ingredients = [
    {ingredient_name: 'cheese', ingredient_unit: 'cups'},
    {ingredient_name: 'bread', ingredient_unit: 'slices'},
    {ingredient_name: 'chicken breast', ingredient_unit: 'lbs'},
    {ingredient_name: 'salt & pepper', ingredient_unit: 'tbsp'},
    {ingredient_name: 'lettuce', ingredient_unit: 'oz'},
    {ingredient_name: 'salad dressing', ingredient_unit: 'oz'},
    {ingredient_name: 'macaroni', ingredient_unit: 'cups'}
  ]

  const steps = [
    // grilled cheese steps
    {step_number: 1, step_instructions: 'place cheese between bread', recipe_id: 1},
    {step_number: 2, step_instructions: 'grill sandwich on skillet for 3 mins on each side', recipe_id: 1},

    // baked chicken steps
    {step_number: 1, step_instructions: 'sprinkle salt and pepper on chicken', recipe_id: 2},
    {step_number: 2, step_instructions: 'bake in oven for 20 mins at 350 degrees', recipe_id: 2},

    // chicken caesar salad steps
    {step_number: 1, step_instructions: 'bake chicken for 20 mins at 350 degrees', recipe_id: 3},
    {step_number: 2, step_instructions: 'toss lettuce, add chicken, and drizzle dressing', recipe_id: 3},

    // mac n cheese steps
    {step_number: 1, step_instructions: 'boil macaroni in water for 12 mins', recipe_id: 4},
    {step_number: 2, step_instructions: 'drain macaroni, place in baking tray and sprinkle cheese over', recipe_id: 4},
    {step_number: 3, step_instructions: 'bake for 35 mins at 350 degrees', recipe_id: 4}
  ]

  const step_ingredients = [
     // grilled cheese step/ig
     {step_id: 1, ingredient_id: 1, quantity: 3},
     {step_id: 1, ingredient_id: 2, quantity: 2},
     // baked chicken step/ig
     {step_id: 3, ingredient_id: 4, quantity: 1},
     {step_id: 3, ingredient_id: 3, quantity: 3},
     // chicken caesar salad step/ing
     {step_id: 5, ingredient_id: 3, quantity: 2},
     {step_id: 6, ingredient_id: 5, quantity: 4},
     {step_id: 6, ingredient_id: 6, quantity: 3},
     // mac n cheese step/ig
     {step_id: 7, ingredient_id: 7, quantity: 4},
     {step_id: 8, ingredient_id: 1, quantity: 3}
  ]
  

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}