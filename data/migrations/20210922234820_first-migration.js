
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments("recipe_id")
            tbl.string("recipe_name",128).notNullable
            tbl.timestamp("created_at").defaultTo(knex.fn.now())
        })
        .createTable("ingredients", tbl => {
            tbl.increments("ingr_id")
            tbl.string("ingr_name",128).notNullable()
            tbl.float("quanity")
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.string('step_instructions', 150).notNullable()
            table.integer('ingr_id')
              .unsigned()
              .notNullable()
              .references('ingr_id')
              .inTable('ingredients')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
          })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes")
};
