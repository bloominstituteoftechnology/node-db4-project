exports.seed = function(knex) {
    return knex('instructions').insert([
      {text: 'pour ceareal into bowl', step_number: 1, recipe_id: 1},
      {text: 'pour milk onto cereal', step_number: 2, recipe_id: 1},
      {text: 'boil water', step_number: 1, recipe_id: 2},
      {text: 'place pasta in boiling water', step_number: 2, recipe_id: 2},
      {text: 'boil pasta for 8 minutes', step_number: 3, recipe_id: 2}
    ]);
};
