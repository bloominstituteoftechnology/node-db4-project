const db = require('../data/db-config.js')

async function findById(recipe_id) {
   
  
        // const scheme = await db('schemes as sc').where('sc.scheme_id', scheme_id).select('sc.scheme_id', 'sc.scheme_name')
  
        // const schemeStructure = {
        //   scheme: scheme[0],
        //   steps: []
        // }
  
        // const checkSteps = await db('schemes as sc').leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id').where('sc.scheme_id', scheme_id).select('st.step_id', 'st.step_number', 'st.instructions').orderBy('st.step_number')
  
        // if (checkSteps[0].step_number == null) {
        //   schemeStructure.steps = []
        // } else {
        //   schemeStructure.steps = checkSteps
        // }
  
        // return schemeStructure

        const recipe = await db('recipes as re').where('re.recipe_id', recipe_id)
        const steps = await db('recipes as re').leftJoin('steps as st', 're.recipe_id', 'st.recipe_id').leftJoin('ingredients as in', 'st.ingredient_id', 'in.ingredient_id').leftJoin('measurements as me', 'me.measurement_id', 'st.measurement_id').select('re.recipe_id', 're.recipe_id', 'st.step_id', 'st.step_number', 'st.instructions', 'st.ingredient_id', 'in.ingredient', 'me.measurement_in_cups').orderBy('st.step_number')

        const recipeStructure = {
            recipe: recipe[0],
            steps: steps
            
        }

        return recipeStructure
  
  }

  module.exports = {
      findById
  }