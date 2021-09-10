
exports.seed = function(knex, promise) {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'peanut, butter, and jelly'},
        {recipe_name: 'steel cut oatmeal'}
      ]);
};
