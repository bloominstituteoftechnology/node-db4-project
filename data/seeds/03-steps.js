/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(()=>{
      return knex('steps').insert([
        {
          step_number: 1,
          recipe_id: 1,
          step_instructions: "Get pot",
          ingredient_id: 1
        },
        {
          step_number: 2,
          recipe_id: 1,
          step_instructions: "Include oil",
          ingredient_id:2
        },
        {
          step_number: 1,
          recipe_id: 2,
          step_instructions: "Eat"
        }
      ])
    })
};
