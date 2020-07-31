
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('recipe', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 255)
                .notNullable()
                .unique();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('step', 255)
                .notNullable()
            tbl.integer('cook_time')
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('ingredients_qty',tbl => {
            tbl.increments();
            tbl.decimal('qty')
                .notNullable()
                .unique();
            tbl.text('unit', 255)
                .notNullable();
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })        
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient', 255)
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

  )
};

exports.down = function(knex) {
  return(
      knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('ingredients_qty')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe')
  );
};
