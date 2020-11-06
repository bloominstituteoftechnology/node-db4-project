exports.seed = async function(knex){
  await knex("recipes_ingredients").insert([
    {recipe_id: 1, ingredient_id: 1, quantity: "1"},
    {recipe_id: 1, ingredient_id: 2, quantity: "1"},
    {recipe_id: 1, ingredient_id: 3, quantity: "1"},
    {recipe_id: 1, ingredient_id: 4, quantity: "1"},
    {recipe_id: 1, ingredient_id: 5, quantity: "1"},
    {recipe_id: 2, ingredient_id: 1, quantity: "1"},
    {recipe_id: 2, ingredient_id: 2, quantity: "1"},
    {recipe_id: 2, ingredient_id: 5, quantity: "1"},
    {recipe_id: 2, ingredient_id: 6, quantity: "1"},
  ])
} 