
exports.seed = function(knex) {
  const recipes = [
    {
      recipe_name: "Chocolate Chip Cookies",
    },
    {
      recipe_name: "Peanut Butter Cookies",
    },
    {
      recipe_name: "No-Bake Cookies",
    },
    {
      recipe_name: "Oatmeal Chocolate Chip Cookies",
    },
    {
      recipe_name: "M&M Cookies",
    },
    {
      recipe_name: "Snickerdoodle Cookies",
    },
  ]

  return knex("recipes").insert(recipes);
};
