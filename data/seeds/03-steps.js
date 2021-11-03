const steps = [
    
]

exports.seed = async function(knex) {
  await knex('steps').truncate()
  await knex('steps').insert(steps)
}