exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        {
          ingredient_name: "beef ribs",
          units: "lbs",
        },
        {
          ingredient_name: "beef bones",
          units: "lbs",
        },
        {
          ingredient_name: "chicken thighs",
          units: "lbs",
        },
        {
          ingredient_name: "soy sauce",
          units: "cups",
        },
        {
          ingredient_name: "water",
          units: "cups",
        },
        {
          ingredient_name: "lettuce",
          units: "leaves",
        },
      ]);
    });
};
