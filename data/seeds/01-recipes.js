
exports.seed = function(knex) {
      return knex('recipes').insert([
        {
          recipe_name: 'cookies',
        }
      ]);
};
