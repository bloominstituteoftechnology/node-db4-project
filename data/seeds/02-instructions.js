
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_step_id: 1, step: 1, instruction: "1. Toast the bagel and spread CC" }
      ]);
    });
};
