exports.up = function (knex, Promise) {
  return knex.schema.createTable("recipes", (tbl) => {
    tbl.increments();
    tbl.string("recipes").notNullable();
    tbl.integer("dish_id").unsigned();
    tbl.foreign("dish_id").references("id").on("dishes");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
