
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable()
    })
    .createTable('steps', table =>{
        table.increments('step_id')
        table.integer('step_num').notNullable().unsigned()
        table.string('step_text').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128).notNullable()     
    })
    .createTable('steps_ingredients', table => {
        table.increments('step_ingredient_id')
        table.string('ingredient_amt', 128).notNullable()
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
