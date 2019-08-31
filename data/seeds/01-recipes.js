
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'brownies', instructions_id: 1 },
        {recipe_name: 'cupcakes', instructions_id: 2},
        {recipe_name: 'donuts', instructions_id: 3}
      ]);
    });
};
