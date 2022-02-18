
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_contents').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_contents').insert([
        { steps_id: 1, ingredients_id: 1 },
        { steps_id: 1, ingredients_id: 2 },
        { steps_id: 1, ingredients_id: 3 },
        { steps_id: 1, ingredients_id: 4 },
        { steps_id: 1, ingredients_id: 5 },
        { steps_id: 1, ingredients_id: 8 },
        { steps_id: 2, ingredients_id: 3 },
        { steps_id: 2, ingredients_id: 5 },
        { steps_id: 2, ingredients_id: 6 },
        { steps_id: 2, ingredients_id: 7 },
        { steps_id: 2, ingredients_id: 8 },
        { steps_id: 2, ingredients_id: 9 },
        { steps_id: 2, ingredients_id: 10 },
        { steps_id: 2, ingredients_id: 11 }
      ]);
    });
};
