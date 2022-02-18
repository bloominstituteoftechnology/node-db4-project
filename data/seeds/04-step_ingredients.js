exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredient")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("step_ingredient").insert([
        { ingredient_id: 1, step_id: 2, quantity: 0.12 },
        { ingredient_id: 2, step_id: 2, quantity: 0.5 },
        { ingredient_id: 3, step_id: 2, quantity: 1.4 },
      ]);
    });
};
