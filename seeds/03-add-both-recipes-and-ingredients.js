
exports.seed = function(knex) {
 
      return knex('recipe_ingreients').insert([
        {recipe_id: 1, ingreidents_id: 1, ammount: 2},
        {recipe_id: 2, ingreidents_id: 2, ammount: 2},
        {recipe_id: 3, ingreidents_id: 3, ammount: 2}
      ]);
  
};
