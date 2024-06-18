/*
#### Data Access

Write a data access file that exports an object with the following function:

  - `getRecipeById(recipe_id)`
  - Should resolve a representation of the recipe similar to the one shown in the **Data Model** above.
  - The function will pull information from several tables using Knex and then create a response object using loops, objects, array methods etc.
  - There are many ways to solve this, but from a performance standpoint the fewer trips to the database the better!

#### Data Model

{
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

*/

const db = require("../data/db-config.js");

function getRecipeById(recipe_id) {
  return db("recipes")
    .where("recipe_id", recipe_id)
    .first()
    .then((recipe) => {
      if (!recipe) {
        return null;
      }
      return db("steps")
        .where("recipe_id", recipe_id)
        .then((steps) => {
          return {
            recipe_id: recipe.recipe_id,
            recipe_name: recipe.recipe_name,
            created_at: recipe.created_at,
            steps: steps.map((step) => {
              return {
                step_id: step.step_id,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                ingredients: [],
              };
            }),
          };
        });
    });
}

module.exports = {
  getRecipeById,
};
