exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    // Brocoli pesto Pasta
    { step_text: "Heat pan", step_number: 1, recipe_id: 1 },
    { step_text: "Add brocoli", step_number: 2, recipe_id: 1 },
    { step_text: "Add pesto mixed with pasta", step_number: 3, recipe_id: 1 },
    // Lemon chicken
    { step_text: "Heat oven", step_number: 1, recipe_id: 2 },
    {
      step_text: "Put chicken and lemon in oven",
      step_number: 2,
      recipe_id: 2,
    },
    { step_text: "Put in oven at 500 degreees", step_number: 3, recipe_id: 2 },
    // salmon en Papillote
    { step_text: "Go fishing", step_number: 1, recipe_id: 3 },
    { step_text: "Cook your fish", step_number: 2, recipe_id: 3 },
  ]);
};
