/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').truncate()
    .then(()=>{
      return knex('measurements').insert([
        {
          recipe_id: 1,
          steps_id: 1,
          ingredient_id: 1,
          quantity: 1
        },
        {
          recipe_id: 1,
          steps_id: 1,
          ingredient_id: 2,
          quantity: 2
        },
        {
          recipe_id: 1,
          steps_id: 2,
          ingredient_id: 3,
          quantity: 10
        },
        {
          recipe_id: 2,
          steps_id: 1,
          ingredient_id: 1,
          quantity: 22
        },
      ])
    })
};
