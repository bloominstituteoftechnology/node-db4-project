
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipe', table => {
        table.increments('recipe_id');
        table.string('recipe_name')
          .notNullable().unique();
    })
    .createTable('ingredients', table => {
        table.increments("ingredient_id")
        table.string("ingredient_name",200).notNullable().unique()
        table.string("ingredient_unit",50)
    })
    .createTable('steps', table => {
        table.increments("step_id")
        table.string("step_instructions", 200).notNullable()
        table.integer("step_number").notNullable()
        table.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipe_id")
          .inTable("recipe")
          .onDelete('RESTRICT');
          .onUpdate('RESTRICT')
    })
    .createTable('step_ingredient', table => {
        table.increments("step_ingredient_id")
        table.float("quantity").notNullable()
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
          .inTable("ingredients")
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredient')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
};
