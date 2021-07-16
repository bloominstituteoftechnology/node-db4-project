exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_name: "Prepare yeast", step_number: 1, step_instructions: "mix warm water with yeast and let sit until creamy", recipe_id: 1 },
    { step_name: "Dry Ingredients", step_number: 2, step_instructions: "Combine all dry ingredients in separate bowl (well mixed)", recipe_id: 1 },
    { step_name: "Combine Wet and Dry", step_number: 3, step_instructions: "stir oil and water/yeast mixture into dry ingredients. Mix until no dry ingredients remain", recipe_id: 1 },
    {
      step_name: "Cold Proof",
      step_number: 4,
      step_instructions: "Place dough in oiled bowl and let sit in fridge for 24 hours. The dough will be read to use after that period of time!",
      recipe_id: 1,
    },

    { step_name: "Cook Egg", step_number: 1, step_instructions: "Heat pan over medium heat, then cook egg to desired doneness", recipe_id: 3 },
    { step_name: "Make Bagel", step_number: 2, step_instructions: "Toast bagel if desired, then add mayo", recipe_id: 3 },
    { step_name: "Combine and Eat!", step_number: 3, step_instructions: "Add egg to bagel. Add seasoning to taste", recipe_id: 3 },
  ]);
};
