exports.up = function (knex) {
  return knex.schema.createTable("recipes", (tbl) => {
    tbl.increments("recipe_id");
  });
};

exports.down = function (knex) {};
