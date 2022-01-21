const step_ingredient = [
  //Beef Pho
  {step_id: 2, ing_id: 1, quantity: 1},
  {step_id: 3, ing_id: 2, quantity: 1.5},
  {step_id: 3, ing_id: 3, quantity: 2},
  //Red Chicken Curry
  {step_id: 5, ing_id: 4, quantity: 1},
  {step_id: 5, ing_id: 5, quantity: .4},
  //Pork Eggrolls
  {step_id: 7, ing_id: 6, quantity: 1}
]

exports.step_ingredient = step_ingredient

exports.seed = function(knex){
  return knex('step_ingredient').insert(step_ingredient)
}
