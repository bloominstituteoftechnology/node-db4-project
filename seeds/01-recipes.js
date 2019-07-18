exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipeName: "Apple Pie",
          instruction:
            "Mix milk, sugar, butter and flour. Put apples on top. Bake for 20 mins at 200 degrees."
        },
        {
          id: 2,
          recipeName: "Bread",
          instruction:
            "Mix flour, salt, water and baking soda and put in the oven."
        },
        {
          id: 3,
          recipeName: "Lemondade",
          instruction: "Mix lemon juice and water and add sugar"
        }
      ]);
    });
};
