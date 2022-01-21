const step_ingredient = [
  //Broccoli Pesto Pasta
  {step_id: 2, ing_id: 1, quantity: 1},
  {step_id: 3, ing_id: 2, quantity: 1.5},
  {step_id: 3, ing_id: 3, quantity: 2},
  
  // Lemon Chicken
  {step_id: 5, ing_id: 4, quantity: 1},
  {step_id: 5, ing_id: 5, quantity: .4},
  //Salmon en Papillote
  {step_id: 7, ing_id: 6, quantity: 1}

]

exports.step_ingredient = step_ingredient

exports.seed = function(knex){
  return knex('step_ingredient').insert(step_ingredient)
}
