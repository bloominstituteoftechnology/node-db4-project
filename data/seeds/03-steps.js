// exports.seed = function(knex, Promise) {
//     return knex('steps').insert([
//         { step_number: 1, recipe_id:1 },
//         { step_number: 2 , recipe_id:5},
//         { step_number: 3, recipe_id:6 },
//         { step_number: 4, recipe_id:4},
//         { step_number: 5, recipe_id:3}
//     ]);
// };
exports.seed = async function(knex){
    await knex("steps").insert([
      {step_number: 1, instruction: "Roast Turkey at 375f", recipe_id: 1},
      {step_number: 2, instruction: "Boil pasta for 15 minutes", recipe_id: 1},
      {step_number: 3, instruction: "mix cheese in the sauce", recipe_id: 1},
      {step_number: 4, instruction: "Drain pasta and add it back to the pot with the marinara", recipe_id: 1},
      {step_number: 5, instruction: "Serve Turkey", recipe_id: 1},
    ])
  }