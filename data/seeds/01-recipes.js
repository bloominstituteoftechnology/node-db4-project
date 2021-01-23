exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      recipe_name: "French Market Chicken With Herbed Potatoes",
      description: "Whole Roasted Chicken and Roasted potatoes",
    },
    {
      recipe_name: "ROOT BEER PULLED PORK SANDWICHES",
      description: "Root Beer BBQ Pulled Pork served on a hamburger bun",
    },
    {
      recipe_name: "Potato Gnocchi Pasta",
      description: "Italian Potato dumplings served with your choice of sauce",
    },
  ]);
};
