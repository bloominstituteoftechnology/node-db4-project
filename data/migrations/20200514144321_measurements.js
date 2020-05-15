exports.up =  function(knex) {
  return knex.schema
    .createTable('measurments', tbl => {
      tbl.increments();
      tbl.decimal('quantity')
        .unsigned)
        .notNullable();

      tbl.integer("recipe_id")
        .references("recipe_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
        .references("ingredients_id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    })

};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('measurements');
};
