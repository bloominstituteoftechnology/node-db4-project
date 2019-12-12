
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'whiskey dun\'right'},
        {recipe_name: 'mexican mule'},
        {recipe_name: 'bartender\s handshake'}
      ]);
    });
};
