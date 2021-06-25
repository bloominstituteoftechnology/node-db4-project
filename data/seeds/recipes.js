
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1,  recipe_name: 'Mapo Tofu', created_at: '2021-6-24'},
      ]);
    });
};
