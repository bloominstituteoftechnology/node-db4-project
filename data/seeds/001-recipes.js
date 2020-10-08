exports.seed = function (knex) {
  const recipes = [
    {
      name: "Easy Bread",
    },
    {
      name: "Easy Pie",
    },
  ];
  return knex("recipes").insert(recipes);
};
