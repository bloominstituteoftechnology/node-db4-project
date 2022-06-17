/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(()=>{
      return knex('ingredients').insert([
        {
          ingredient_name: 'rice'
        },
        {
          ingredient_name: 'oil'
        },
        {
          ingredient_name: 'meat'
        }
      ])
    })
};
