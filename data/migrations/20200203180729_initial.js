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
    table.string("name").notNullable();
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');
  });

  // recipes_ingredients refs recipes + ingredients
  await knex.schema.createTable("recipes_ingredients", table => {
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

      table
      .integer("ingredients_id")
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

      table.primary(['recipe_id', 'ingredients_id'])
  });

  // steps + recipes => steps can belong to many recipe and many recipes can have many steps
  await knex.schema.createTable("steps_recipes", table => {
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

      table
      .integer("steps_id")
      .references("id")
      .inTable("steps")
      .onDelete('CASCADE');

      table.primary(['recipe_id', 'steps_id'])
  });

};

exports.down = async function(knex) {};
