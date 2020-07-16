exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { ingredient_name: "flour" },
    { ingredient_name: "baking soda" },
    { ingredient_name: "salt" },
    { ingredient_name: "butter" },
    { ingredient_name: "sugar" },
    { ingredient_name: "brown sugar" },
    { ingredient_name: "egg" },
    { ingredient_name: "vanilla" },
    { ingredient_name: "chocolate chips" },
    { ingredient_name: "cheese" },
    { ingredient_name: "marinara" },
    { ingredient_name: "pepperoni" },
    { ingredient_name: "sausage" },
  ]);
};
