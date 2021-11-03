exports.up = async function (knex) {
  await knex.schema
    .createTable('recipes', table => {
      table.increments()
    })
    .createTable('ingredients', table => {
      table.increments()
    })
    .createTable('steps', table => {
      table.increments()
    })
    .createTable('steps_ingredients', table => {
      table.increments()
    }) 
};
  
  // {
  //   cars.increments();

  //   cars.string('vin').notNullable().unique();
  //   cars.string('make').notNullable();
  //   cars.string('model').notNullable();
  //   cars.decimal('mileage').unsigned().notNullable();
  //   // unsigned ensures that the integer cannot be negative
  //   // cars.integer('mileage').notNullable();
  //   cars.string('title').notNullable();
  //   // cars.string('title').notNullable().defaultTo('clean');
  //   cars.string('transmission').notNullable();
    

  //   cars.timestamps(true, true);
  // });


exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};