const recipes = [
    
]

exports.seed = async function(knex) {
  await knex('recipes').truncate()
  await knex('recipes').insert(recipes)
}
