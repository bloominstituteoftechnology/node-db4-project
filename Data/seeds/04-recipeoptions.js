exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("recipeoptions")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("recipeoptions").insert([
          { option_id: 1, recipe_id: 2, ingredient_id: 2 },
          { option_id: 2, recipe_id: 1, ingredient_id: 2 },
          { option_id: 3, recipe_id: 1, ingredient_id: 3 },
        ]);
      });
  };