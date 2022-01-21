const recipes = [
  {recipe_name: 'Beef Pho'},
  {recipe_name: 'Red Chicken Curry'},
  {recipe_name: 'Pork Eggrolls'},
]

exports.recipes = recipes 

exports.seed = function(knex) {
  return knex('recipes').insert(recipes)
}

