
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
      table.increments('id')
      table.text('name').notNull().unique()
  })
  await knex.schema.createTable('ingredients',(table) => {
      table.increments('id')
      table.text('name').notNull().unique()
  })

  await knex.schema.createTable('steps', (table) => {
      table.increments('id')
      table.text('step_one').notNull()
      table.text('step_two').notNull()
      table.text('step_three')
      table.integer('recipe_id')
        .references('id')
        .inTable('recipes')
        .onDelete("SET NULL")
		.onUpdate("CASCADE")
    }); 

    await knex.schema.createTable('recipes_ingredients',(table) => {
        table.integer('recipe_id')
          .references('id')
          .inTable('recipes')
          .onDelete('SET NULL')
          .onUpdate('CASCADE')
        table.integer('ingredient_id')
          .references('id')
          .inTable('ingredients')
          .onDelete('SET NULL')
          .onUpdate('CASCADE')
        table.text('quanity').notNull()
        table.primary(['recipe_id','ingredient_id'])
    })
}

exports.down = async function(knex) { 
  await knex.schema.dropTableIfExists('recipes_ingredients')
  await knex.schema.dropTableIfExists('steps')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
};
