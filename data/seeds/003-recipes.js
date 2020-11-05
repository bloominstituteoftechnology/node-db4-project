exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_title: "yams", instructions: "cook the yams", recipe_book_id: 1 },
    { recipe_title: "test1", instructions: "test 1", recipe_book_id: 1 },
    { recipe_title: "test2", instructions: "test 2", recipe_book_id: 1 },
    { recipe_title: "test3", instructions: "test 3", recipe_book_id: 1 },
  ]);
};
