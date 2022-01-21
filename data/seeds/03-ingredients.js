
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'olive oil', step_id: 2},
        {ingredient_id: 2, ingredient_name: 'rowValue2', step_id: 2}        
      ]);
    });
};
