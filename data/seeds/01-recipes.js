const recipes = [
  { recipe_name: "Spaghetti Bolognese" },
  { recipe_name: "Pork Belly" }
    
]

const ingredients = [
  { ingredient_name: "spaghetti", ingredient_unit:"grams" },
  { ingredient_name: "bolognese sauce", ingredient_unit:"grams" },
  { ingredient_name: "olive oil", ingredient_unit:"spoon" },
  { ingredient_name: "pork belly", ingredient_unit:"grams" },
  { ingredient_name: "vegetable oil", ingredient_unit:"grams" },
  { ingredient_name: "salt", ingredient_unit:"spoon" },
]

const steps = [
  // Spaghetti Bolognese
  { step_instructions: "Heat pan", step_number: 1, recipe_id: 1 },
  { step_instructions: "add olive oil", step_number:2, recipe_id: 1 },
  { step_instructions: "add spaghetti mixed with bolognese sauce", step_number:3, recipe_id: 1 },
  // Pork Belly
  { step_instructions: "Put a deep fry pan on a medium heat with vegetable oil", step_number: 1, recipe_id: 2 },
  { step_instructions: "Add salt on the pork belly and deep fry it until golden", step_number: 2, recipe_id: 2 },
]

const steps_ingredients = [
  // Spaghetti Bolognese
  { step_id: 2 , ingredient_id: 3 , quantity: 1},
  { step_id: 3, ingredient_id: 1, quantity: 300},
  { step_id: 3, ingredient_id: 2, quantity: 300},
   // Pork Belly
  { step_id: 1, ingredient_id: 5, quantity: 500},
  { step_id: 2, ingredient_id: 6, quantity: 1},
  { step_id: 2, ingredient_id: 4, quantity: 500},
]


exports.seed = async function(knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('steps_ingredients').insert(steps_ingredients)
}
