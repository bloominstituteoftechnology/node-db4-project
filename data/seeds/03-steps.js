exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions: "Open Box and pour into a bowl",
          recipe_id: 1,
        },
        {
          step_number: 2,
          step_instructions: "Add type of milk of your choice",
          recipe_id: 1,
        },
        { step_number: 3, step_instructions: "Enjoy", recipe_id: 1 },
        {
          step_number: 1,
          step_instructions: "Put bread in toaster",
          recipe_id: 2,
        },
        {
          step_number: 2,
          step_instructions: "Spread on condiment and enjoy",
          recipe_id: 2,
        },
        {
          step_number: 1,
          step_instructions: "Pour into bowl and microwave for 3 minutes",
          recipe_id: 3,
        },
        {
          step_number: 1,
          step_instructions: "Spread mayo and mustard on both sides of bread",
          recipe_id: 4,
        },
        {
          step_number: 2,
          step_instructions: "Add turkey, cheese, lettuce, and onions",
          recipe_id: 4,
        },
        {
          step_number: 1,
          step_instructions: "Bring water to a rolling boil",
          recipe_id: 5,
        },
        {
          step_number: 2,
          step_instructions:
            "Add spaghetti noodles and cook for 13 minutes or until al dente",
          recipe_id: 5,
        },
        {
          step_number: 3,
          step_instructions: "Heat up sauce while pasta cooks",
          recipe_id: 5,
        },
        { step_number: 4, step_instructions: "Drain pasta", recipe_id: 5 },
        {
          step_number: 5,
          step_instructions:
            "Combine pasta and sauce. Add grated parmesan cheese if desired",
          recipe_id: 5,
        },
        {
          step_number: 1,
          step_instructions: "Place tortilla chips on plate",
          recipe_id: 6,
        },
        {
          step_number: 2,
          step_instructions:
            "Add protein of your choice, black beans, and cheese",
          recipe_id: 6,
        },
        {
          step_number: 3,
          step_instructions:
            "Cook in microwave or toaster oven until cheese is melted",
          recipe_id: 6,
        },
        {
          step_number: 4,
          step_instructions: "Add salsa, sour cream, guacamole, and enjoy",
          recipe_id: 6,
        },
        {
          step_number: 1,
          step_instructions: "Choose flavor that you desire",
          recipe_id: 7,
        },
        { step_number: 2, step_instructions: "Unwrap and eat", recipe_id: 7 },
        {
          step_number: 1,
          step_instructions: "Choose your flavor",
          recipe_id: 8,
        },
        {
          step_number: 2,
          step_instructions:
            "Add ice, water, desired fruit, and protein powder to blender",
          recipe_id: 8,
        },
        {
          step_number: 3,
          step_instructions: "Blend for up to one minute",
          recipe_id: 8,
        },
        {
          step_number: 4,
          step_instructions: "Pour into a glass and enjoy",
          recipe_id: 8,
        },
      ]);
    });
};
