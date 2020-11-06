exports.up = async function (knex) {
  await knex.schema.createTable("recipes", tbl => {
    tbl.increments("id");
    tbl.text("name", 128).notNull().unique();
  });

  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments("id");
    tbl.text("name", 128).notNull().unique();
  });

  await knex.schema.createTable("instructions", tbl => {
    tbl.integer("step_number").notNull();
    tbl.text("instruction").notNull();
    tbl.increments("id");

    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("recipes_ingredients", tbl => {
    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.text("quantity", 128).notNull();

    tbl.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
