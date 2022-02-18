exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("quantity", (tbl) => {
      tbl.increments("quantity_id");
      tbl.integer("quantity", 2).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.text("ingredient_name").notNullable();
      tbl
        .integer("quantity")
        .unsigned()
        .notNullable()
        .references("quantity_id")
        .inTable("quantity")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipies", (tbl) => {
      tbl.increments("recipe_id");
      tbl.text("recipe_name").unique().notNullable();
      tbl.datetime("created_at");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step-number").notNullable();
      tbl.text('step_instructions').notNullable();
      tbl.integer('ingredients')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.integer('recipe')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipies')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('quantities')
};
