const db = require('../../data/db-config');

/**
 * {
  "recipe_id" : 1,
  "recipe_name": "Spaghetti Bolognese",
  "created_at": "2021-01-01 08:23:19.120",
  "steps": [
    {
      "step_id": 11,
      "step_number": 1,
      "step_instructions": "Put a large saucepan on a medium heat",
      "ingredients": []
    },
    {
      "step_id": 12,
      "step_number": 2,
      "step_instructions": "Add 1 tbsp olive oil",
      "ingredients": [
        { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
      ]
    },
  ]
}

recipes as re
steps as st
ingredients as in
quantities as q


select steps that match recipe id
    once you have steps, populate ingredients
select ingredients that match 
select quantities that match in-id and st-id

 */
async function getRecipeById(recipe_id) {
    const dummyRecipe = {
        recipe_id: null,
        recipe_name: "",
        created_at: "",
        steps: [],
    }
}

module.exports = { getRecipeById }