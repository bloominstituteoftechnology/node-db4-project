exports.seed = function(knex, Promise) {
    return knex('steps').insert([
      { recipe_id:1 ,step_number: 1 ,step_instructions: "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain."}, 

      { recipe_id:1 ,step_number: 2 ,step_instructions: "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes."}, 
     
      { recipe_id:1 ,step_number: 3 ,step_instructions: "Fold macaroni into cheese sauce until coated."}, 
    
      { recipe_id:2 ,step_number: 1 ,step_instructions: "Preheat oven to 375 degrees F (190 degrees C)."}, 
     
      { recipe_id:2 ,step_number: 2 ,step_instructions: "Combine ricotta cheese, 1/2 of the mozzarella cheese, Parmesan cheese, egg, and Italian seasoning in a bowl."}, 
     
      { recipe_id:2 ,step_number: 3 ,step_instructions: "Cook sausage in a skillet over medium heat until no longer pink, 5 to 10 minutes; drain. Stir in marinara sauce."}, 
     
      { recipe_id:2 ,step_number: 4 ,step_instructions: "Spread 1/6 of the cheese mixture evenly on each flatbread; cover with sausage mixture. Top with remaining mozzarella cheese."}, 
     
      { recipe_id:2 ,step_number: 5 ,step_instructions: "Bake in the preheated oven until cheese is melted and bubbly, 10 to 15 minutes."}, 
    ]
    
    );
  };