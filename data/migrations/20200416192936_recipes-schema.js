
exports.up = function(knex) {
  return (
    knex.schema
        .createTable("recipes", tbl => {
            tbl.increments("id");
            tbl.string("name").notNullable();
        
        })
        .createTable("steps", tbl => {
            tbl.increments("id");
            tbl.integer("step_number").notNullable();
            tbl.text("instructions").notNullable();
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
        .createTable("ingredients", tbl => {
            tbl.increments("id");
            tbl.string("name").notNullable()
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.float("quantity").notNullable();
        })
  )
};

exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfExists("ingredients")
            .dropTableIfExists("steps")
            .dropTableIfExists("recipes")
          
          
    )
};
