exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    {
      step_number: 1,
      step_instruction: "Boil 500ml of water in a saucepan",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instruction: "Put all ramen package contents into boiling water",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instruction: "Eat it when you think it is ready for consumption",
      recipe_id: 1,
    },
    {
      step_number: 1,
      step_instruction:
        "High heat boil enough water in saucepan so that the eggs you will place is completely under water",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instruction:
        "Once water is boiling, turn off the heat, place eggs into water, cover pot",
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_instruction: "Remove eggs after 10 to 12 minutes, peel and eat",
      recipe_id: 2,
    },
    {
      step_number: 1,
      step_instruction:
        "Consider fast food options, such as McDonald's, Wendy's or Chick-Fil-A",
      recipe_id: 3,
    },
    {
      step_number: 2,
      step_instruction:
        "Get to fast food location of choice and order what you want",
      recipe_id: 3,
    },
    {
      step_number: 3,
      step_instruction: "After order, wait, eat food, then regret",
      recipe_id: 3,
    },
  ]);
};
