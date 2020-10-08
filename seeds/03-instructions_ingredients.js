
exports.seed = function(knex) {
      return knex('instructions_ingredient').insert([
        // pb&j
        {measurement:'2 oz', ingredients_id:'1', recipe_id:'1'},
        {measurement:'2 oz', ingredients_id:'2', recipe_id:'1'},
        {measurement:'2 slices', ingredients_id:'3', recipe_id:'1'},
        // spaghetti
        {measurement:'12 oz', ingredients_id:'4', recipe_id:'2'},
        {measurement:'2 Tbs', ingredients_id:'5', recipe_id:'2'},
        {measurement:'1 cup', ingredients_id:'6', recipe_id:'2'},
        {measurement:'2 Tbs', ingredients_id:'7', recipe_id:'2'},
        {measurement:'1 lb', ingredients_id:'8', recipe_id:'2'},
        {measurement:'24 oz', ingredients_id:'9', recipe_id:'2'},
        //burgers
        {measurement:'2 lbs', ingredients_id:'10', recipe_id:'3'},
        {measurement:'1 tsp', ingredients_id:'11', recipe_id:'3'},
        {measurement:'1 tsp', ingredients_id:'12', recipe_id:'3'},
        {measurement:'2 Tbs', ingredients_id:'13', recipe_id:'3'},
        {measurement:'1.5 Tbs', ingredients_id:'14', recipe_id:'3'},
        {measurement:'8', ingredients_id:'15', recipe_id:'3'}
      ]);
};
