exports.seed = async function(knex) {
  await knex("steps").insert([
    { step_instructions: "boil water", step_number: 1 },
    { step_instructions: "add noodles", step_number: 2 },
    { step_instructions: "cook for 12 min", step_number: 3 },
    { step_instructions: "drain noodles", step_number: 4 },
    { step_instructions: "stir in sauce", step_number: 5 },
    { step_instructions: "stir pancake mix and water together", step_number: 1 },
    { step_instructions: "pour 1/4 cup batter onto heated frying pan", step_number: 2 },
    { step_instructions: "flip with spatula when bubbles start to appear and cook for a couple more min", step_number: 3 }
    ]);
};
