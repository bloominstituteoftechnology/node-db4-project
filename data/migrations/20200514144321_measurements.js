exports.up =  function(knex) {
  return knex.schema
    .createTable('measurements', tbl => {
      tbl.increments();
      tbl.decimal('quantity')
        .unsigned()
        .notNullable();
      tbl.integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      tbl.integer("ingredients_id")
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    })

};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('measurements');
};
