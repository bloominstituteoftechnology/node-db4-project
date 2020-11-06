exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          step_number: 1,
          instruction: "Spread 2 tbsp of butter on bread slices",
          recipe_id: 1,
        },
        {
          step_number: 2,
          instruction: "Place cheese between bread slices",
          recipe_id: 1,
        },
        {
          step_number: 3,
          instruction: "Grill sandwich for 2 minutes on each side",
          recipe_id: 1,
        },
        {
          step_number: 1,
          instruction: "Cook hamburger meet in a pot",
          recipe_id: 2,
        },
        {
          step_number: 2,
          instruction: "Add spaghetti sauce to the cooked meet",
          recipe_id: 2,
        },
        { instruction: "Boil spaghetti noodles", step_number: 3, recipe_id: 2 },
        {
          step_number: 4,
          instruction: "Add half stick of butter to noodles",
          recipe_id: 2,
        },
        {
          step_number: 5,
          instruction: "Combine noodles and sauce together",
          recipe_id: 2,
        },
      ]);
    });
};
