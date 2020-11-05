exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_title: "yams", recipe_book_id: 1 },
    { recipe_title: "test1", recipe_book_id: 1 },
    { recipe_title: "test2", recipe_book_id: 1 },
    { recipe_title: "test3", recipe_book_id: 1 },
  ]);
};
