
exports.seed = function(knex) {
      return knex('recipe').insert([
        {
          recipe_name: 'cookies',
        }
      ]);
};
