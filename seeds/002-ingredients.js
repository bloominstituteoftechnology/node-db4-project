exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Green Apple" },
        { name: "Flour" },
        { name: "Chicken" },
        { name: "Jerk Seasoning" },
        { name: "Brown Sugar" }
      ]);
    });
};
