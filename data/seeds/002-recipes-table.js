
exports.seed = function(knex) {
      return knex('recipes').insert([
        { 'recipe-name': 'Lasagna'},
        { 'recipe-name': 'Tacos'},
        { 'recipe-name': 'Tiramisu'}
      ]);
};
