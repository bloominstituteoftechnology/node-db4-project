
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => { // list of recipes
    table.increments('recipe_id')
    table.string('recipe_name', 200).notNullable().unique()
    })
    .createTable('ingredients', table => { // ingredients required as per selected recipes
        table.increments("ingredient_id")
        table.string("ingredient_name", 200).notNullable().unique()
        table.string("ingredient_unit", 50)
    })
    .createTable('steps', table => { // individual steps to make per selected recipes
        table.increments("step_id")
        table.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipe_id")
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
        table.integer("ingredient_number").notNullable().unsigned()
        table.string("instructions", 200).notNullable()
    })
    .createTable('step_ingredient', table => { // joins the steps to ingredients into one
        table.increments("step_ingredient_id")
        table.integer("step_id")
          .unsigned()
          .notNullable()
          .references("step_id")
          .inTable("steps")
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
        table.integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("ingredient_id")
          .onUpdate('RESTRICT')
          .inTable("ingredients")
          .onDelete('RESTRICT')
        table.string("quantity").notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredient')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
