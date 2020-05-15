
exports.up = function (knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments();

            tbl.string("name", 128);
        })
        .createTable("ingredients", tbl => {
            tbl.increments();

            tbl.string("name", 128);
        })
        .createTable("recipe_ingredients", tbl => {
            tbl.primary(("recipe_id"), ("ingredient_id"))

            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes");

            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")

            tbl.integer("quantity");
        })
        .createTable("steps", tbl => {
            tbl.increments();

            tbl
                .integer("step_number")
                .unsigned()
                .notNullable()

            tbl.string("instructions", 255).notNullable();

            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes");
        });
};
//knex migrate:rollback
exports.down = function (knex) {

};
