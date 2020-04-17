
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {step_number: 1, instructions: "Mix Flour, Sugar and Milk in a bowl.", recipe_id: 1},
        {step_number: 2, instructions: "Fry on a griddle until golden brown.", recipe_id: 1},
        {step_number: 3, instructions: "Serve warm with Real Maple Syrup.", recipe_id: 1},
        {step_number: 1, instructions: "Slice Potatoes.", recipe_id: 2},
        {step_number: 2, instructions: "Sprinkle with Salt.", recipe_id: 2},
        {step_number: 3, instructions: "Fry in Oil until crispy.", recipe_id: 2},
        {step_number: 1, instructions: "Place Ice Cream into a blender.", recipe_id: 3},
        {step_number: 2, instructions: "Add Milk and Vanilla to blender.", recipe_id: 3},
        {step_number: 3, instructions: "Blend on high speed until smooth.", recipe_id: 3}
      ]);
    });
};
