exports.seed = async function(knex){
  await knex("instructions").insert([
    {step_number: 1, instruction: "Roll chicken in breadcrumbs", recipe_id: 1},
    {step_number: 2, instruction: "Bake chicken in oven for 30 minutes", recipe_id: 1},
    {step_number: 3, instruction: "Boil pasta for 15 minutes", recipe_id: 1},
    {step_number: 4, instruction: "Drain pasta and add it back to the pot with the marinara", recipe_id: 1},
    {step_number: 5, instruction: "Plate pasta and add chicken on top to serve", recipe_id: 1},

    {step_number: 1, instruction: "Boil Pasta for 15 minutes", recipe_id: 2},
    {step_number: 2, instruction: "Bake chicken in oven for 30 minutes", recipe_id: 2},
    {step_number: 3, instruction: "Chop chicken into desired size", recipe_id: 2},
    {step_number: 4, instruction: "Drain pasta and add it back to the pot with the alfredo sauce", recipe_id: 2},
    {step_number: 5, instruction: "Plate pasta and add chicken on top to serve", recipe_id: 2},
  ])
}