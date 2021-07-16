const steps_ingredients = [
  { 
    quantity: '1 crust',
    ingredient_id: 1,
    steps_id: 3
  },
  { 
    quantity: '1 apple',
    ingredient_id: 2,
    steps_id: 3
  },
  { 
    quantity: '1 piece of chicken',
    ingredient_id: 3,
    steps_id: 1
  },
  { 
    quantity: '2 lettuce leaves',
    ingredient_id: 4,
    steps_id: 2
  },
  { 
    quantity: '1 oven',
    ingredient_id: 5,
    steps_id: 4
  },
  { 
    quantity: '1 cutting board',
    ingredient_id: 6,
    steps_id: 1
  },
]
exports.steps_ingredients = steps_ingredients

exports.seed = function(knex) {
  return knex('steps_ingredients').insert(steps_ingredients)
}
