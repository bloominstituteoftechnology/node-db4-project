
   
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: "Mashed Potatoes" },
  ])
  .then(resp => {
    return knex('steps').insert([
      { step_number: 1, step_instructions: "Boil potatoes in salted water", recipe_id: 1 },
      { step_number: 2, step_instructions: "Heat butter and milk until butter is melted", recipe_id: 1 },
      { step_number: 3, step_instructions: "Blend milk and butter into potatoes and mix together", recipe_id: 1 },
    ])
  })
  .then(resp => {
    return knex('ingredients').insert([
      { ingredient_name: "Potatoes" },
      { ingredient_name: "Butter" },
      { ingredient_name: "Milk" },
    ])
  })
};