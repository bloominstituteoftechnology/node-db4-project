exports.seed = function (knex) {
  return knex("ingredients").insert([
    { recipe_id: 3, ingredient_name: "baking potatoes" },
    { recipe_id: 3, ingredient_name: "egg yolk" },
    { recipe_id: 2, ingredient_name: "root-beer" },
    { recipe_id: 2, ingredient_name: "pork(shoulder)" },
    { recipe_id: 2, ingredient_name: "bbq sauce(of your choice)" },
    { recipe_id: 1, ingredient_name: "yukon gold potatoes" },
    { recipe_id: 1, ingredient_name: "Rosemary" },
    { recipe_id: 1, ingredient_name: "Chicken(whole)" },
    { recipe_id: 1, ingredient_name: "Kosher Salt" },
    { recipe_id: 1, ingredient_name: "EVOO" },
  ]);
};
