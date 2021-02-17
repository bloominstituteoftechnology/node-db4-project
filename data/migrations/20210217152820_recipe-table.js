exports.up = function (knex) {
    return knex.schema
      .createTable("recipes", tbl => {
          tbl.increments("recipe_id")
          tbl.string("recipe_name", 128).notNullable()
      })
      .createTable("ingredients", tbl => {
          tbl.increments("ingredient_id")
          tbl.string("ingredient_name", 128).notNullable()
      })
      .createTable("recipe_ingredients", tbl => {
          tbl.increments("id")
          tbl.integer("recipe_id")
              .unsigned()
              .notNullable()
              .references("recipe_id")
              .inTable("recipes")
              .onDelete("RESTRICT")
          tbl.integer("ingredient_id")
              .unsigned()
              .notNullable()
              .references("ingredient_id")
              .inTable("ingredients")
              .onDelete("RESTRICT")
          tbl.float("quantity").notNullable()
      })
      .createTable("instructions", tbl => {
          tbl.increments("instruction_id")
          tbl.integer("recipe_id")
              .unsigned()
              .notNullable()
              .references("recipe_id")
              .inTable("recipes")
              .onDelete("RESTRICT")
          tbl.string("instruction_text").notNullable()
          tbl.integer("step_number").notNullable()
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("instructions")
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes");
  };