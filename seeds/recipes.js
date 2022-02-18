
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'grilled cheese'},
        {recipe_name: 'baked chicken'},
        {recipe_name: 'chicken caesar salad'},
        {recipe_name: 'mac n cheese'}
      ]);
    });
};
