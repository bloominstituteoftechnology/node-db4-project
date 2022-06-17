exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(function() {
      return knex('ingredients')
        .insert([
          { ingredient_name: 'tablespoons of Lawry\'s' },
          { ingredient_name: 'tablespoons of peanut butter' },
          { ingredient_name: 'cups of popcorn kernels' },
          { ingredient_name: 'slices of bread' },
          { ingredient_name: 'tablespoons of ketchup' },
          { ingredient_name: 'tablespoons of coconut oil' },
          { ingredient_name: 'potatoes' },
          { ingredient_name: 'spray bottle of water' },
        ]);
    })
};
