exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Eggs" },
    { ingredient_name: "Cups of Milk" },
    { ingredient_name: "Tablespoons of Butter" },
    { ingredient_name: "Slices of Bread" },
    { ingredient_name: "Strips of Bacon" },
    { ingredient_name: "Peppers" },
  ]);
};
