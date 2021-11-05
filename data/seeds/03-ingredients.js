
exports.seed = function(knex, promise) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'slice of bread'},
        {ingredient_name: 'peanut butter'},
        {ingredient_name: 'jelly'},
        {ingredient_name: 'steel cut oats'},
        {ingredient_name: 'water'}
      ]);
};
