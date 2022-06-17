/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(()=>{
      return knex('recipes').insert([
        {
          recipe_name: "Paella"
        },
        {
          recipe_name: "Fried Rice"
        }
      ])
    })
};
