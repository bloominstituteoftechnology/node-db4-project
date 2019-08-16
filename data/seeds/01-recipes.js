
exports.seed = function(knex) {
  return knex('recipes').insert([   
    { recipe_name: "Soft-Scrambled Egg Sandwich With Blistered Tomatoes and Parmesan" },
    { recipe_name: "Chicken Sandwiches With Fennel, Spinach, and Parmesan" },
    { recipe_name: "Roasted Fennel, Tomatoes, and White Beans With Parmesan" },
    { recipe_name: "Seared Tilapia With Lemony Wild Rice and Spinach" },
    { recipe_name: "Marinated Fennel With Chicken and Wild Rice" },
    { recipe_name: "Tilapia Sandwich With Tomatoes and Basil-Parmesan Vinaigrette" },
    { recipe_name: "Wild Rice and Veggies With Parmesan" }
  ]);
};
