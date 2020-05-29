
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, step: 'Choose the Right Baking Pans.', instructions_id: 1 },
        { id: 2, step: 'Allow Ingredients to Reach Room Temperature.', instructions_id: 1 },
        { id: 3, step: 'Prep the Pans.', instructions_id: 1 },
        { id: 4, step: 'Preheat the Oven.', instructions_id: 1 }
      ]);
    });
};
