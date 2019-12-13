
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient_name: "bagel"},
        {ingredient_name: "cream cheese"}
      ]);
    });
};
