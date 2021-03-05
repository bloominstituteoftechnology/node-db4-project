
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {Ingredient: 'Frozen Burrito'},
        {Ingredient: 'Quesadilla'},
        {Ingredient: 'Cheeze'},
        {Ingredient: 'Peanut Butter'},
        {Ingredient: 'Jelly'},
        {Ingredient: 'Bread'}
      ]);
    });
};
