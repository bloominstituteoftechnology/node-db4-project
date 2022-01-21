const recipes = [
  {recipe_name: 'Broccoli Pesto Pasta'},
  {recipe_name: 'Lemon Chicken'},
  {recipe_name: 'Salmon en Papillote'},
]

exports.recipes = recipes 

exports.seed = function(knex) {
  return knex('recipes').insert(recipes)
}

