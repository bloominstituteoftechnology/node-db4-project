
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe_Details').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_Details').insert([
        {Recipe_Id: 1, Ingredient_Id: 1, Ingredient_Qty: 1, Unit: 'Burrito'},
        {Recipe_Id: 2, Ingredient_Id: 2, Ingredient_Qty: 1, Unit: 'Quesadilla'},
        {Recipe_Id: 2, Ingredient_Id: 3, Ingredient_Qty: 2, Unit: 'Ounces'},
        {Recipe_Id: 3, Ingredient_Id: 4, Ingredient_Qty: 2, Unit: 'Heaping Knife Fulls'},
        {Recipe_Id: 3, Ingredient_Id: 5, Ingredient_Qty: 4, Unit: 'Heaping Knif Fulls'},
        {Recipe_Id: 3, Ingredient_Id: 6, Ingredient_Qty: 2, Unit: 'Slices Of Bread'},
      ]);
    });
};
