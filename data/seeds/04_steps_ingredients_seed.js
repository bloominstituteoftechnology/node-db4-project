
exports.seed = function(knex, Promise) {
  return knex('steps_ingredients').insert([
    { 
      ingredient_id: 7, 
      step_id: 1, 
      ingredient_amt: "1" 
    },
    { 
      ingredient_id: 8, 
      step_id: 2, 
      ingredient_amt: "3 tbsp" 
    },
    { 
      ingredient_id: 6, 
      step_id: 3, 
      ingredient_amt: "2 28-oz cans" 
    },
    { 
      ingredient_id: 7, 
      step_id: 4, 
      ingredient_amt: "1/2" 
    },
    { 
      ingredient_id: 1, 
      step_id: 6, 
      ingredient_amt: "2" 
    },
    { 
      ingredient_id: 3, 
      step_id: 6, 
      ingredient_amt: "8 oz" 
    },
    { 
      ingredient_id: 2, 
      step_id: 6, 
      ingredient_amt: "3 sprigs" 
    },
    { 
      ingredient_id: 4, 
      step_id: 8, 
      ingredient_amt: "2 tbsp" 
    },
    { 
      ingredient_id: 5, 
      step_id: 9, 
      ingredient_amt: "1-2 large pinches" 
    },
    { 
      ingredient_id: 8, 
      step_id: 10, 
      ingredient_amt: "1 stick" 
    },
    { 
      ingredient_id: 11, 
      step_id: 10, 
      ingredient_amt: "12 oz" 
    },
    { 
      ingredient_id: 10, 
      step_id: 11, 
      ingredient_amt: "1 box" 
    }
  ])
};
