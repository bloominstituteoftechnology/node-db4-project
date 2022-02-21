/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_name: 'Fried Rice'},
    {created_at: `${Date.now()}`}
  ])

  await knex('steps').truncate()
  await knex('steps').insert([
    {step_number: 1},
    {step_instructions: "Cook Rice"},
    {recipe_id: 1}
  ])

  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {ingredient_name: "Rice"}
  ])

  await knex('steps_ingredients').truncate()
  await knex('steps_ingredients').insert([
    {recipe_id: 1},
    {ingredients_id: 1},
    {steps_id: 1},
    {quantity: 1}
  ])

};
