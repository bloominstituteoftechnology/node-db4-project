const steps_ingredients = [
    
]

exports.seed = async function(knex) {
  await knex('steps_ingredients').truncate()
  await knex('steps_ingredients').insert(steps_ingredients)
}