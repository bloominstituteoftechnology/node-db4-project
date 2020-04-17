
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe-name', 128).notNullable().unique();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient-name', 128).notNullable().unique();
      })
      .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('step').notNullable();
        tbl.string('instruction', 528).notNullable().unique();
      })
      .createTable('recipe-ingredient', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      })
      .createTable('recipe-instruction', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('instruction_id')
            .unsigned()
            .notNullable()
            .references('instructions.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe-instruction')
    .dropTableIfExists('recipe-ingredient')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');;
};
