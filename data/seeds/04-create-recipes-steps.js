
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('steps').insert([
        {instructions_id: 1, recipes_id: 1, step: '1'},
        {instructions_id: 2, recipes_id: 1, step: '2'},
        {instructions_id: 3, recipes_id: 1, step: '3'},
        {instructions_id: 2, recipes_id: 2, step: '2'},
        {instructions_id: 3, recipes_id: 2, step: '3'}
      ]);
};
