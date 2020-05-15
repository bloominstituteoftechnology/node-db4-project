const db = require("../../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredients,
  add,
  findById,
  addStep,
  update,
  remove,
};

// SELECT * FROM RECIPES;
//.references('id').inTable('rec')
function getRecipes() {
  return db("recipes as r").select("*");
}
//SELECT  i.name, ri.quantity FROM recipes_ingredients as ri
// INNER JOIN ingredients as i ON ri.ingredients_id = i.id
// INNER JOIN recipes as r ON ri.recipes_id = r.id
// where r.id = 2;
function getShoppingList(id) {
  return db
    .select("i.name", "ri.quantity")
    .from("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredients_id", "=", "i.id")
    .join("recipes as r", "ri.recipes_id", "=", "r.id")
    .where({ recipes_id: id });
}

//SELECT  s.step_number, s.instruction from steps as s
//INNER JOIN recipes as r on s.recipes_id = r.id
//where s.recipes_id = 1;

function getInstructions(id) {
  return db
    .select("s.step_number", "s.instruction")
    .from("steps as s")
    .join("recipes as r", "s.recipes_id", "=", "r.id")
    .where({ recipes_id: id });
}
function getRecipesByIngredients(id) {
  return db
    .select("recipes.name")
    .from("recipes")
    .join(
      "recipe_ingredients",
      "recipes.id",
      "=",
      "recipe_ingredients.recipes_id"
    )
    .join(
      "ingredients",
      "recipe_ingredients.ingredients_id",
      "=",
      "ingredients.id"
    )
    .where({ "ingredients.id": id });
}
// function all() {
//     /*
//       select p.contents as quote, u.username as saidBy
//       from posts as p
//       join users as u on p.user_id = u.id;
//     */

//     return db("posts as p")
//       .join("users as u", "p.user_id", "=", "u.id")
//       .select("p.contents as quote", "u.username as saidBy");
//   }

//   function findById(id) {
//     return db("posts").where("id", id).first();
//   }

//   function add(post) {
//     return db("posts")
//       .insert(post, "id")
//       .then(ids => {
//         return findById(ids[0]);
//       });
//   }

//   /*

function findById(id) {
  return db("recipes").where("id", id).first();
}

function add(foods) {
  return db("recipes")
    .insert(foods, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function addStep(stepData, id) {
  return db("steps")
    .insert(stepData, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

/*
db('foods') => a promise that resolves to a user
findById  => a promise that resolves to a user
add  => a promise that resolves to a user
post
*/

function update(changes, id) {
  return db("foods")
    .where({ id }) //{id} grabbing whole object
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
// return db("steps as st")
// .where("food_id", id)
// .join("foods as sc", "st.food_id", "=", "sc.id")
// .select("st.id", "sc.foods_name", "st.step_number", "st.instructions")
// .orderBy("st.step_number");
// }

function remove(id) {
  return db("foods").where({ id }).del();
}
