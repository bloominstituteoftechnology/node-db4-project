exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Cereal", category_id: 1 },
        { recipe_name: "Toast", category_id: 1 },
        { recipe_name: "Soup", category_id: 2 },
        { recipe_name: "Turkey Sandwich", category_id: 2 },
        { recipe_name: "Spaghetti", category_id: 3 },
        { recipe_name: "Nachos", category_id: 3 },
        { recipe_name: "Granola Bar", category_id: 4 },
        { recipe_name: "Protein Shake", category_id: 4 },
      ]);
    });
};
