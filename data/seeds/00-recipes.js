
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'fried chicken'},
        // {id: 2, instructionId: 2, ingredientId: 2, name: 'piza'},
        // {id: 3, instructionId: 3, ingredientId: 3, name: 'corn dogs'}
      ]);
    });
};
