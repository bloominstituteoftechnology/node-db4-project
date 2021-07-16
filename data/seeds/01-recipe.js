const recipes = ["BLT", "PB Sandwich", "Muffin", "Waffle"];

exports.seed = (knex) => {
  return knex("recipes")
    .del()
    .then(() => {
      return knex("recipes").insert(
        recipes.map((recipe) => {
          return { recipe_name: recipe };
        })
      );
    });
};
