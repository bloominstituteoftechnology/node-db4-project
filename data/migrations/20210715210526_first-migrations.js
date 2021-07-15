exports.up = async function (knex) {
  await knex.schema
    .createTable("recipe", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 350).notNullable().unique();
      table.string("timestamp").defaultTo(knex.fn.now());
    })
    .createTable("recipe_ingredients", (table) => {
      table.increments("recipe_ingredients_id");
    })
    .createTable("steps", (table) => {
      table.increments("steps_id");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredients_id");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("ingredients").dropTableIfExists("steps").dropTableIfExists("recipe_ingredients").dropTableIfExists("recipe");
};
