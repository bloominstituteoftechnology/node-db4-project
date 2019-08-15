exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { what_to_do: "cut" },
        { what_to_do: "stir" },
        { what_to_do: "cook" }
      ]);
    });
};
