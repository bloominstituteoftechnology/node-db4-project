exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "baking potatoes" },
    { ingredient_name: "egg yolk" },
    { ingredient_name: "root-beer" },
    { ingredient_name: "pork(shoulder)" },
    { ingredient_name: "bbq sauce(of your choice)" },
    { ingredient_name: "yukon gold potatoes" },
    { ingredient_name: "Rosemary" },
    { ingredient_name: "Chicken(whole)" },
    { ingredient_name: "Kosher Salt" },
    { ingredient_name: "EVOO" },
  ]);
};
