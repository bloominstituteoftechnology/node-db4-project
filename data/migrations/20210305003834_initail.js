
exports.up =function(knex) {
  return knex.schema.createTable("recipe", (table) => {
      table.increments("id")
      table.text("name").notNull()
  })
  .createTable("ingriedent", (table) => {
      table.increments("id")
      table.text("name")
  })
  .createTable("recipe_ingriedent", (table) => {
      table.increments("id")
      table.integer("recipe_id").notNull().references("id").inTable("recipe")
      table.integer("ingriedent_id").references("id").inTable("ingriedent")
       table.float("quantity")
  })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists("recipe_ingriedent")
    .dropTableIfExists("ingriedent")
  .dropTableIfExists("recipe")
};
