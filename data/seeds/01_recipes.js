exports.seed = function(knex) { return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes')
        .insert([
          { recipe_name: 'popcorn' },
          { recipe_name: 'potatoes' },
          { recipe_name: 'peanut butter sandwich' },
        ])
    });
};
