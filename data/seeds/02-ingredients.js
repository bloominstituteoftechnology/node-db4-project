exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "oil" },
        { ingredient_name: "butter" },
        { ingredient_name: "chicken" },
        { ingredient_name: "rice" },
      ]);
    });
};
