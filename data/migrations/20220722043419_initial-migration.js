exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes' tbl => {
    tbl.increments()
  })
  .createTable('ingredients' tbl => {
    tbl.increments()
  })
  .createTable('steps' tbl => {
    tbl.increments()
  })
  .createTable('step_indgredients' tbl => {
    tbl.increments()
  })

};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('step_indgredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')

};
