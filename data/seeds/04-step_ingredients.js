exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("step_ingredients").insert([
        { quantity: "1 nub", step_id: 1, ingredient_id: 1 },
        { quantity: "1 can", step_id: 1, ingredient_id: 2 },
        { quantity: "2 tbsp", step_id: 2, ingredient_id: 3 },
      ]);
    });
};
