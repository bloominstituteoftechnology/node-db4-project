exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredientName: "Shredded Lettuce", quantity: 5, recipeId:  1 },
    { ingredientName: "Leaf Lettuce", quantity: 5, recipeId: 2 },
    { ingredientName: "Roma Tomato", quantity: 5, recipeId: 1 },
    { ingredientName: "Tomato", quantity: 5, recipeId: 2 },
    { ingredientName: "Sweet Onion", quantity: 5, recipeId: 1 },
    { ingredientName: "Yellow Onion", quantity: 5, recipeId: 2 },
    { ingredientName: "Beef", quantity: 5, recipeId: 2 },
    { ingredientName: "Chicken", quantity: 5, recipeId: 1 },
    { ingredientName: "Salsa", quantity: 5, recipeId: 1 },
    { ingredientName: "Taco Shells", quantity: 5, recipeId: 1 },
    { ingredientName: "Burger Buns", quantity: 5, recipeId: 2 },
    { ingredientName: "Potaoes", quantity: 5, recipeId: 2 },
    { ingredientName: "Green Peppers", quantity: 5, recipeId: 1 },
    { ingredientName: "Maple Syrup", quantity: 5, recipeId: 3 },
    { ingredientName: "Flour", quantity: 5, recipeId: 3 },
    { ingredientName: "Butter", quantity: 5, recipeId: 3 },
    { ingredientName: "Milk", quantity: 5, recipeId: 3 },
    { ingredientName: "Eggs", quantity: 5, recipeId: 3 },
    { ingredientName: "Bacon", quantity: 5, recipeId: 3 },
    { ingredientName: "Sausage links", quantity: 5, recipeId: 3 }
  ]);
};
