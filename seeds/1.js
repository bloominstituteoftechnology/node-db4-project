
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {recipe_name: 'pb&j sandwich'},
        {recipe_name: 'spaghetti'},
        {recipe_name: 'burgers'}
      ]);
    }
