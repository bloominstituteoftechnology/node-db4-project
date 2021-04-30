
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_instructions: 'beat eggs in medium bowl until blended', ingredient_id: 1},
        {id: 2, step_instructions: 'heat butter in large nonstick skillet over medium heat until hot', ingredient_id: 3},
        {id: 3, step_instructions: 'add milk to pan as desired for fluffier eggs', ingredient_id: 2}
      ]);
    });
};
