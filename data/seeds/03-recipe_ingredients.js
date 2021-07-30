const recipe_ingredients = [

{ recipe_ingredients_id: 1, steps_id: 1,
      quantity: '1 Whole chicken',  
},


{ recipe_ingredients_id: 2, steps_id: 2,
      quantity: '2 slices of Bread',
},


{ recipe_ingredients_id: 3, steps_id: 1,
    quantity: 'desired amount of Peanut Butter',     
},


{ recipe_ingredients_id: 4, steps_id: 1,
    quantity:'desired amount of Grape Jelly',   
},


{ recipe_ingredients_id: 5, steps_id: 1,
    quantity: '1/4 - 1/3 cup or desired amount of honey',   
},


{recipe_ingredients_id: 6, steps_id: 1,
    quantity:'1/2 - whole standard bottle of BBQ Sauce',   
}

]
exports.recipe_ingredients = recipe_ingredients
exports.seed = function(knex) {
return knex('recipe_ingredients').insert(recipe_ingredients)
}