exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Peanut Butter" },
        { name: "Jelly" },
        { name: "Bread" },
        { name: "Popcorn" },
        { name: "Eggs" },
        { name: "Milk" }
      ]);
    });
};
