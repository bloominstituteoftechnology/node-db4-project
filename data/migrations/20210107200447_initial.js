
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (tbl) => {
      tbl.increments('id')
      tbl.text('name').notNull()
      tbl.timestamps(true, true)
  })

  await knex.schema.createTable('ingredients', (tbl) => {
    tbl.increments('id')
    tbl.text('name').notNull()
})

await knex.schema.createTable("shoppingList", (tbl) => {
    tbl.increments("id")
    tbl.text("name").notNull()
    // define this column as a foreign key
    tbl.integer("recipes_id")
        // .notNull()
        .references("id")
        .inTable("recipes'")
        .onDelete("SET NULL") 
})
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("shoppingList")
	await knex.schema.dropTableIfExists("ingredients")
	await knex.schema.dropTableIfExists("recipes")
}