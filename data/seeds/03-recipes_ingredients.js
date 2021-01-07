
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipe_id: 1, ingredient_id:1, quanity:'5 oz'},
      ]);
    });
};
