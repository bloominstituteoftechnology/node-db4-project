const recipe = [
    { recipe_name: 'Spaghetti Bolognese' }, // recipe_id: 1    
]

exports.seed = async function(knex) {
  await knex('recipe').insert(recipe)
};
