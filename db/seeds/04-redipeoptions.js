exports.seed = function (knex) {
    return knex("recipeoptions")
      .del()
      .then(function () {
        return knex("recipeoptions").insert([
          { option_id: 1, recipe_id: 2, ingredient_id: 2 },
          { option_id: 2, recipe_id: 1, ingredient_id: 2 },
          { option_id: 3, recipe_id: 1, ingredient_id: 3 },
        ]);
      });
  };