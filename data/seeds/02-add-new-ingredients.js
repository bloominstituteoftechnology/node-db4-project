
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Palm oil'},
        {ingredient_name: 'Salt'},
        {ingredient_name: 'Ugwu'},
        {ingredient_name: 'Okra'},
        {ingredient_name: 'Flour'}
      ]);
};
