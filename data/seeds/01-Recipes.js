
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Recipe: 'Microwave Burrito'},
        {Recipe: 'Cheeze Quesadilla'},
        {Recipe: 'Peanut Butter & Jelly'}
      ]);
    });
};
