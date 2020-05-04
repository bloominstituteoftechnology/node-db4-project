exports.up = function(knex) {
    return knex.schema.table("recipes_ingredients", tbl => {
      tbl.string("units", 255);
      tbl.float("quantity");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table("recipes_ingredients", clmn => {
      clmn.dropColumn("quantity");
      clmn.dropColumn("units");
    });
  };