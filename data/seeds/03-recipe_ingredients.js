exports.seed = function(knex) {
        return knex('recipe_ingredients').insert([
          { recipe_id: 1, ingredient_id: 1, quantity: "5"},
          { recipe_id: 2, ingredient_id: 2, quantity: "1cup"},
          { recipe_id: 3, ingredient_id: 3, quantity: "a lot" }
        ]);
  };