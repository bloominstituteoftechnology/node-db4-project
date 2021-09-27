exports.seed = function(knex) {

    return knex('recipes').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('recipes').insert([
          {recipe_name: 'chocolate chip cookies'},
          {recipe_name: 'spaghetti'},
          {recipe_name: 'pizza'}
        ]);
      });
  };