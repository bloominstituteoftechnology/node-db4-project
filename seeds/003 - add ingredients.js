exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "pound of pasta", ingredient_amount: 1 },
        { ingredient_name: "cups of water", ingredient_amount: 8 },
        { ingredient_name: "cups of sauce", ingredient_amount: 3.5 }
      ]);
    });
};
