
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_name').insert([
        {ingredient_name: 'whiskey'},
        {ingredient_name: 'drop of water'},
        {ingredient_name: 'tequila'},
        {ingredient_name: 'ginger beer'},
        {ingredient_name: 'fernet'},
        {ingredient_name: 'coca cola'}
      ]);
    });
};
