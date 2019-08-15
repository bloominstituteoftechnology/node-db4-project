exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "one recipe" },
        { name: "another recipe" },
        { name: "one more recipe" }
      ]);
    });
};
