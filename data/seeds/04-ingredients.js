const ingredients = [
{ 
      ingredient_name: 'Whole Chicken'  
},


{
      ingredient_name: 'Bread'
},


{ 
      ingredient_name: 'Peanut Butter'
},


{ 
      ingredient_name: 'Grape Jelly'
},


{ 
      ingredient_name: 'BBQ Sauce'
},


{ 
      ingredient_name: 'Natural Honey'
}]  
exports.ingredients = ingredients
exports.seed = function(knex) {
return knex('ingredients').insert(ingredients)
}