exports.seed = function (knex, Promise) {
  return knex("instructions").insert([
    { recipe_id: 1, instruction_text: "Crack eggs", step_number: 1 },
    { recipe_id: 1, instruction_text: "Beat eggs with milk in bowl", step_number: 2 },
    { recipe_id: 1, instruction_text: "Chop peppers", step_number: 3 },
    { recipe_id: 1, instruction_text: "Cook eggs on stove until halfway cooked", step_number: 4 },
    { recipe_id: 1, instruction_text: "Add in peppers and cook to liking", step_number: 5 },
    { recipe_id: 2, instruction_text: "Crack eggs", step_number: 1 },
    { recipe_id: 2, instruction_text: "Beat eggs with milk in bowl", step_number: 2 },
    { recipe_id: 2, instruction_text: "Cook on stove until complete", step_number: 3 },
    { recipe_id: 3, instruction_text: "Start cooking bacon", step_number: 1 },
    { recipe_id: 3, instruction_text: "Butter pan", step_number: 2 },
    { recipe_id: 3, instruction_text: "Crack eggs into pan", step_number: 3 },
    { recipe_id: 3, instruction_text: "Drop bread in toaster", step_number: 4 },
    { recipe_id: 3, instruction_text: "If done correctly, everything will be ready at the same time", step_number: 5 },
  ]);
};