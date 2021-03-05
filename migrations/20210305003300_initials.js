
exports.up = async function(knex) {
  await knex.schema.creaateTable("recipes",(tbl)=>{
      tbl.increments("r_id")
      tbl.text('recipe_name').notNull().unique()
      tbl.
  })
};

exports.down = async function(knex) {
  
};
