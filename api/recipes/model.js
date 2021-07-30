// const knex = require("knex");
// const db_config = require("./knexfile");
// const db = knex(db_config.development);

// get dishes
// function getDishes() {
//   return db("dishes");
// }
// // add dish
// function addDish(dish) {
//   return db("dishes").insert(dish);
// }
// // get dish by id
// function getDishById(id) {
//   return db("dishes").where({ "dishes.id": id });
// }
// // get recipe
// function getRecipe() {
//   return db("recipes");
// }
// // INCLUDING RECIPES NAME
// function getRecipes() {
//   return db("recipes as a")
//     .leftJoin("recipes as s", "s.id", "a.recipes_id")
//     .select("a.id", "a.recipes_name", "s.recipes_name");
// }
// // add recipe
// function addRecipe(recipe) {
//   return db("recipes").insert(recipe);
// }
// get recipe by id
function getRecipeById(recipe_id) {
  return Promise.resolve("awesome");
}
// create recipe
// async function createRecipe(recipe) {
//   const [id] = await db("recipes").insert(recipe);
//   return getRecipes().where({ id }).first();
// }
// // delete recipe
// function deleteRecipe(id) {
//   return db("recipes").where({ id }).del();
// }

module.exports = {
  // getRecipes,
  getRecipeById,
  // createRecipe,
  // deleteRecipe,
  // addRecipe,
  // getRecipe,
  // getDishById,
  // addDish,
  // getDishes,
};
