exports.seed = function (knex, Promise) {
  return knex("recipes").insert([{ recipe_name: "Pizza Dough" }, { recipe_name: "Homemade Pizza" }, { recipe_name: "Breakfast Sandwich" }]);
};
