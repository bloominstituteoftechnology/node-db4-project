exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Dolma', created_at: "2021-04-19 12:26:34.120"},
        {recipe_name: 'Cream of Wheat', created_at: "2021-04-19 12:26:34.120"}
      ]);
    });
};