
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Spaghetti' },
    { recipe_name: 'Quesadilla' },
  ]);
};
