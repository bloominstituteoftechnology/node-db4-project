
exports.up = async function(knex) {
  await knex.schema.createTable("recipes",(tbl)=>{
    /* //id    recipe_name qty  options         requirements    
    // 1. Momo          1plate   veg/nonVeg     //ground chicken/
                                                mutton
                                                /beef
                                                /pork , 
                                                cumin power,
                                                 momo masala,
                                                wrapper,
                                                lemon,
                                                oil,
                                                salt
                                                cabbage
 */
      tbl.increments("r_id")
      tbl.text('recipe_name').notNull().unique()
    //   tbl.boolean('options').defaultTo('nonVeg')
    tbl.text("description")
  })

  await knex.schema.createTable("Ingredients",(tbl)=>{
      tbl.increments("id")
      tbl.text("name").notNull().unique()
      

  })

  await knex.schema.createTable("recipesIngredient",(tbl)=>{
    tbl.integer("recipe_id").notNull().references("r_id").inTable("recipes")
    tbl.integer("ingredient_id").notNull().references("id").inTable("ingredients")
    tbl.date("now").notNull().defaultTo(knex.raw("current_timestamp"))
    tbl.date("cooktime")

    //how to 
    tbl.primary("recipe_id","ingredient_id")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipesIngredient")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
