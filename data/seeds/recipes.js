/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('recipes').insert([   
    { recipe_name: "Egg Sandwich", created_at: "2021-01-01 08:23:19.120"},
    { recipe_name: "Spaghetti", created_at: "2021-02-08 10:16:25.110"}
  ]);
};
