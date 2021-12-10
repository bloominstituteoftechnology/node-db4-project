exports.seed = async function (knex) {
  return await knex('steps').insert([
      {   
          step_number: 1, 
          step_instructions: 'Lay out two pieces of bread', 
          recipe_id: 2 
      },
      { 
          step_number: 2, 
          step_instructions: 'Spread peanutbutter on one slice', 
          recipe_id: 2 
      },
      { 
          step_number: 3, 
          step_instructions: 'Spread jelly on opposing slice', 
          recipe_id: 2 
      },
      { 
          step_number: 4, 
          step_instructions: 'Put slices together with the spreads on the inside', 
          recipe_id: 2 
      },
      { 
          step_number: 1, 
          step_instructions: 'Combine milk and oats in a small saucepan', 
          recipe_id: 1 
      },
      { 
          step_number: 2, 
          step_instructions: 'Cook on medium heat til oatmeal thickens to desired consistency', 
          recipe_id: 1 
      },
      { 
          step_number: 3, 
          step_instructions: 'Take off of heat and stir in cinnamon and honey', 
          recipe_id: 1 
      },
      { 
          step_number: 1, 
          step_instructions: 'Place a slice of bread in the toaster', 
          recipe_id: 3 
      },
      { 
          step_number: 2, 
          step_instructions: 'Spread the butter on the toast', 
          recipe_id: 3 
      },
      { 
          step_number: 3, 
          step_instructions: 'Sprinkle cinnamon and sugar on toast', 
          recipe_id: 3 
      }
  ])
}
