exports.up = async function(knex) {
  // recipes
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("name").notNullable();
  });

  // ingredients
  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.float('quantity').notNullable();
  });

  // steps refs recipe
  await knex.schema.createTable("steps", table => {
    table.increments("id");
    table.string("instruction").notNullable();
  });

  // recipes_ingredients refs recipes + ingredients
  await knex.schema.createTable("recipes_ingredients", table => {
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

      table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete('CASCADE');

      table.primary(['recipe_id', 'ingredient_id'])
  });

  // steps + recipes => steps can belong to many recipe and many recipes can have many steps
  await knex.schema.createTable("recipes_steps", table => {
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

      table
      .integer("step_id")
      .references("id")
      .inTable("steps")
      .onDelete('CASCADE');

      table.primary(['recipe_id', 'step_id'])
  });

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('steps_recipes')
  await knex.schema.dropTableIfExists('recipes_ingredients')
  await knex.schema.dropTableIfExists('steps')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
};
