
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_name: 'Cereal',
          created_at: new Date().toDateString()
        },
        {
          recipe_name: 'Ham Sandwich',
          created_at: new Date().toDateString()
        },
        {
          recipe_name: 'Avocado Toast',
          created_at: new Date().toDateString()
        }
      ]);
    });
};
