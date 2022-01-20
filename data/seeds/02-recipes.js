const recipe = [
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: 'Honey BBQ Chicken' },
    { recipe_name: 'scrambled eggs' }
    
]

exports.seed = async function(knex) {
  await knex('recipe').insert(recipe)
};
