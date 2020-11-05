exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_title: "yams", recipe_book_id: 1, instructions: "mix and bake1" },
    { recipe_title: "test1", recipe_book_id: 1, instructions: "mix and bake2" },
    { recipe_title: "test2", recipe_book_id: 3, instructions: "mix and bake3" },
    { recipe_title: "test3", recipe_book_id: 2, instructions: "mix and bake4" },
  ]);
};
