
exports.up =async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name').notNullable().unique()
        table.timestamp('created_at')
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.decimal('step_number').notNullable()
        table.string('step_instructions').notNullable()
        table.string('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name').notNullable().unique()
        table.decimal('quantity')
    })

};

exports.down =async function(knex) {
  await knex.schema
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
