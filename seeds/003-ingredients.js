exports.seed = function(knex) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { ingredient_name: "Box of cereal", ingredient_amount: 1 },
        { ingredient_name: "Bowl", ingredient_amount: 1 },
        { ingredient_name: "Cups of milk", ingredient_amount: 1.5 }
      ]);
    });
};
