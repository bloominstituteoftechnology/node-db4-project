const steps = [
{ step_number: 1, recipe_id: 1,
      instructions: 'marinate chicken in honey and bbq'
},


{ step_number: 2, recipe_id: 1,
      instructions: 'Bake at 425F for 1hr 20min occasionaly pouring 1/4 cup of water in baking pan' 
},


{ step_number: 1, recipe_id: 2,
      instructions: 'Spread Peanut Butter and Grape Jelly onto separate slices of bread'
},


{ step_number: 2, recipe_id: 2,
      instructions: 'Place together the separate slices, then cut into any shape desired'   
},]
  
exports.steps = steps
exports.seed = function(knex) {
return knex('steps').insert(steps)
}