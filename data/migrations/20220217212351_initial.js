
exports.up = async function (knex) {

  await knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 128).notNullable().unique()
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name', 128).notNullable().unique()
        tbl.string('ingredient_unit', 50)
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
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

};
