
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
      table.increments('id')
      table.text('recipe_name').notNull()
      table.real('oven_temp').notNull()
      table.real('bake_time').notNull()
  })
  await knex.schema.createTable('ingredients',(table) => {
    table.increments('id')
    table.text('ingredient_name').notNull()
    table.text('quantity_needed').notNull()
  })

  await knex.schema.createTable('recipe_ing',(table) => {
      table.integer('recipe_id').references("id").inTable("recipes").onDelete("CASCADE")
      table.integer('ingrediant_id').references("id").inTable('ingredients').onDelete("CASCADE")
      table.date("date_created").notNull().defaultTo(knex.raw("current_timestamp"))
    //   table.primary(['recipe_id','ingrediant_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_ing')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
};
