exports.seed = function (knex) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        { recipe_name: 'Burger' },
        { recipe_name: 'Taco' },
        { recipe_name: 'Pizza' },
      ]);
    });
};
