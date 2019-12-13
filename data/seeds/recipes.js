exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Scrambled Eggs" },
        { name: "PB & J" },
        { name: "Popcorn" }
      ]);
    });
};
