
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Recipe_name:"recipe1"},
        {Recipe_name:"recipe2"},
        {Recipe_name:"recipe3"},
        {Recipe_name:"recipe4", description:"Great recipe!"},
        {Recipe_name:"recipe5"},
      ]);
    });
};
