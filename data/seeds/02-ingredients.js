exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "bread" },
    { ingredient_name: "meat" },
    { ingredient_name: "lettuce" },
    { ingredient_name: "eggs" },
    { ingredient_name: "oil" },
    { ingredient_name: "mayo" },
  ]);
};
