exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "galangal" },
        { ingredient_name: "coconut milk" },
        { ingredient_name: "coconut oil" },
        { ingredient_name: "beef" },
        { ingredient_name: "salt" },
      ]);
    });
};
