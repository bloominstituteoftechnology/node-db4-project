exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { recipe_id: 1, step: "Crack eggs" },
        { recipe_id: 1, step: "Add Milk" },
        { recipe_id: 1, step: "Scramble" },
        { recipe_id: 2, step: "Get Bread" },
        { recipe_id: 2, step: "Add Peanut Butter & Jelly" },
        { recipe_id: 2, step: "Top with another piece of bread" },
        { recipe_id: 3, step: "Get Popcorn" },
        { recipe_id: 3, step: "Take off plastic" },
        { recipe_id: 3, step: "Put in microwave and hit 'popcorn'" }
      ]);
    });
};
