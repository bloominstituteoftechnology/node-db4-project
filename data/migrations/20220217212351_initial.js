
exports.up = async function(knex) {

  await knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
    })
    .createTable('steps', tbl => {
        tbl.increments()
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments()
    })
  
};

exports.down = async function(knex) {

    await knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

};
