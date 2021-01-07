
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_one: 'first step', step_two:'second', step_three:'third', recipe_id: 1},

      ]);
    });
};
