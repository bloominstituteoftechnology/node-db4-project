exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipes_name", 128).notNullable().unique();
      tbl.date("created_at");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("step_instructions").notNullable();
      tbl.text("ingredients");
      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("recipes_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name").notNullable();
      tbl.integer("quantity").unsigned().notNullable();
      tbl.integer("recipe_id").unsigned().unique();
      tbl.foreign("recipe_id").references("id").on("recipes");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
