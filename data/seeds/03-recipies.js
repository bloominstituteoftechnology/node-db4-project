exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipies")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipies").insert([
        { recipe_name: "Roast Chicken" },
        { recipe_name: "Fried Chicken" },
        { recipe_name: "Chicken and Rice" },
      ]);
    });
};
