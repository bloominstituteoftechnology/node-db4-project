

exports.up = function(knex) {
    return (
        knex.schema
          .createTable('recipes', tbl => {
              tbl.increments();
              tbl.string('recipe_name', 255)
                  .notNullable()
                  .unique();
          })
          .createTable('instruction', tbl => {
              tbl.increments();
              tbl.string('step', 255)
                  .notNullable()
              tbl.integer('minutes')
                  .notNullable();
              tbl.integer('recipe_id')
                  .unsigned()
                  .notNullable()
                  .references('recipes.id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })
          .createTable('ingredient', tbl => {
              tbl.increments();
              tbl.string('ingredient', 255)
                  .unique()
                  .notNullable();
          })
          .createTable('instructions_ingredient',tbl => {
              tbl.increments();
              tbl.string('measurement', 255)
                  .notNullable()
              tbl.integer('ingredients_id')
                  .unsigned()
                  .notNullable()
                  .references('ingredient.id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              tbl.integer('recipe_id')
                  .references('recipes.id')
                  .unsigned()
                  .notNullable()
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })        
          
    )
  };
  
  exports.down = function(knex) {
    return(
        knex.schema
          .dropTableIfExists('instructions_ingredient')
          .dropTableIfExists('ingredient')
          .dropTableIfExists('instruction')
          .dropTableIfExists('recipes')
    );
  };
  
