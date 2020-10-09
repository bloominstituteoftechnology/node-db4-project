
exports.seed = function(knex) {
  const ingredients = [
    {
      ingredient_name: "Flour",
      recipe_id: 1
    },
    {
      ingredient_name: "Sugar",
      recipe_id: 1
    },
    {
      ingredient_name: "Chocolate",
      recipe_id: 1
    },
    {
      ingredient_name: "Baking Soda",
      recipe_id: 1
    },
    {
      ingredient_name: "M&Ms",
      recipe_id: 5
    },
    {
      ingredient_name: "Peanut Butter",
      recipe_id: 3
    },
    {
      ingredient_name: "Oats",
      recipe_id: 3
    },
    {
      ingredient_name: "Butter",
      recipe_id: 4
    },
  ]

  return knex("ingredients").insert(ingredients);
};