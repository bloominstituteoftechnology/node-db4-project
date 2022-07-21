const recipes = [
    { recipe_name: 'Caferio roast' },
    { recipe_name: 'BBQ Chicken' },
    { recipe_name: 'Burger' }
  ]
  
  const ingredients = [
    {ingredient_name: 'pork_roast', ingredient_unit: 'lbs'},
    {ingredient_name: 'brown_sugar', ingredient_unit: 'cups'},
    {ingredient_name: 'BBQ_sauce', ingredient_unit: 'tbls'},
    {ingredient_name: 'chicken', ingredient_unit: 'lbs'},
    {ingredient_name: 'beef', ingredient_unit: 'lbs'},
    {ingredient_name: 'bun', ingredient_unit: 'lbs'},
  ]
  
  const steps = [
    // Caferio roast
    {step_text: 'Place roast in instapot and cook for 50 minutes', step_order: '1', recipe_id: '1'},
    {step_text: 'Place brown sugar in instapot and stir until disolved', step_order: '2', recipe_id: '1'},
    // BBQ Chicken
    {step_text: 'Grill Chicken', step_order: '1', recipe_id: '2'},
    {step_text: 'Add BBQ sauce to the chicken', step_order: '2', recipe_id: '2'},
    // Burger
    {step_text: 'Butcher the cow and get the beef', step_order: '1', recipe_id: '3'},
    {step_text: 'Grill the Beef', step_order: '2', recipe_id: '3'},
    {step_text: 'Add the beef to the bun', step_order: '3', recipe_id: '3'},
  ]
  
  const step_ingredients = [
    // Caferio roast
    { step_id: '1', ingredient_id: '1', quantity: '5' },
    { step_id: '2', ingredient_id: '2', quantity: '1' },
    { step_id: '3', ingredient_id: '4', quantity: '3' },
    { step_id: '4', ingredient_id: '3', quantity: '5' },
    { step_id: '2', ingredient_id: '5', quantity: '2' },
    { step_id: '7', ingredient_id: '6', quantity: '1' },
  ]
  
  exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
  }