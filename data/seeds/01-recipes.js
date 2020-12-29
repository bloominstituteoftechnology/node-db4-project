exports.seed = function(knex) {
        return knex('recipes').insert([
          { recipe_name: 'my recipe'},
          { recipe_name: 'your recipe'},
          { recipe_name: 'krabby patty secret formula'}
        ]);
  };