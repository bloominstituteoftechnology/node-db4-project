
exports.seed = function(knex) {
  return knex('ingredients').insert([
      {ingredient_name: 'Cake'},
    ]);
};

