exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { ingredient_id: 1, step_id: 2, quantity: 0.12 },
        { ingredient_id: 2, step_id: 2, quantity: 0.5 },
        { ingredient_id: 3, step_id: 2, quantity: 1.4 },
      ]);
    });
};
