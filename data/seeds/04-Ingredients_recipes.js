
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients_recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients_recipes').insert([
        {RecipeId:1,IngredientId:1},
        {RecipeId:1,IngredientId:2},
        {RecipeId:1,IngredientId:3},
        {RecipeId:2,IngredientId:2},
        {RecipeId:2,IngredientId:3},
        {RecipeId:3,IngredientId:2},
        {RecipeId:3,IngredientId:4},
      ]);
    });
};
