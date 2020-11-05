exports.seed = function (knex) {
  return knex("recipe_books").insert([
    { recipe_book_title: "justins cook book" },
    { recipe_book_title: "wills cook book" },
    { recipe_book_title: "mikes cook book" },
  ]);
};
