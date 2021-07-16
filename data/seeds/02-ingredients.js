const ingredients = [
  { 
    ingredient_name: 'Pie Crust'  
  },
  { 
    ingredient_name: 'Apples'
  },
  { 
    ingredient_name: 'Chicken'
  },
  { 
    ingredient_name: 'Lettuce'
  },
  { 
    ingredient_name: 'Oven'
  },
  { 
    ingredient_name: 'Cutting Board'
  },
]

exports.ingredients = ingredients

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
}