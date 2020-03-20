
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Chili', author: 'Kim'},
        {name: 'Roast Beef', author: 'Cindy'},
        {name: 'Empanatas', author: 'Shanna'},
        {name: 'Rice Soup', author: 'Colleen'} 
      ]);
    });
};
