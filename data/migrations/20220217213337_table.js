exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable().unique();
      tbl.date("created_at");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("instructions", 128).notNullable();
      tbl.integer("num_steps").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("step_ingredient", (tbl) => {
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE");
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE");
      tbl.string("quantity");
      tbl.primary(["ingredient_id", "step_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step_ingredient")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
