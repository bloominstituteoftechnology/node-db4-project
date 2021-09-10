exports.up = function (knex) {
  return knex.schema.createTable('steps', table => {
    table.increments('step_id')
    table.integer('step_number')
      .notNullable()
    table.string('instructions')
      .notNullable()
    table.integer('recipe_id')
      .unsigned()
      .index()
      .references('recipe_id')
      .inTable('recipes')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('steps')
}
