const ingredients = [
    
]

exports.seed = async function(knex) {
  await knex('ingredients').truncate()
  await knex('ingredients').insert(ingredients)
}