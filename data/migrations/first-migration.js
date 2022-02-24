exports.up =  async function(knex) { // create the tables
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments('recipe_id') // primary key
            table.string('recipe_name') // name
                .notNullable()
                .unique()
        })
        .createTable('ingredients', (table) => {
            table.increments('ingredient_id') // primary key
            table.string('ingredient_name', 128) // name
                .notNullable()
                .unique()
            table.string('ingredient_unit',50) //unit
        })
        .createTable('steps', (table) => {
            table.increments('step_id') // primary key
            table.integer('step_number').notNullable()
                .notNullable()
                .unsigned()
            table.string('step_instructions', 200).notNullable()
                .notNullable()
            table.integer('recipe_id') // foreign key
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onUpdate('RESTRICT') // preservation of our recipe, restrict deletion 
                .onDelete('RESTRICT')
        })
        .createTable('step_ingredients', (table) => {
            table.increments('step_ingredient_id') // primary key
            table.string('quantity')
                .notNullable()
            table.integer('step_id') // foreign key for specific step
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
            table.integer('ingredient_id') // foreign key for specific ingredient
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
        })
  };
  
  exports.down = async function(knex) { // destroy tables and should be destroyed the opposite way

    await knex.schema
        .dropTableIfExists('step_ingredients')    
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
  };