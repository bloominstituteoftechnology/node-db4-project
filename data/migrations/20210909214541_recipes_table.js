exports.up = function (knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments('recipe_id')
    table.string('recipe_name')
      .notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipes')
}
