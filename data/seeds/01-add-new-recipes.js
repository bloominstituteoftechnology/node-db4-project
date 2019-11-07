
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Plaintain Porridge'},
        {recipe_name: 'Egusi Soup'},
        {recipe_name: 'Okro Soup'}
      ]);
};
