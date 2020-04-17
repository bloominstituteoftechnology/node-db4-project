
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {"title": "Pancakes"},
        {"title": "French Fries"},
        {"title": "Vanilla Shake"}
      ]);
      
    });
};
