exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_options")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_options").insert([
        { recipe_id: 2, ingredient_id: 2 },
        { recipe_id: 1, ingredient_id: 2 },
        { recipe_id: 1, ingredient_id: 3 },
      ]);
    });
};
