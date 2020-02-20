exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
        {recipeStep: "Slice vegitables", recipeId: 2},
        {recipeStep: "Sautee onions and green peppers", recipeId: 1},
        {recipeStep: "Cook meat in skillet on med-high heat", recipeId: 2},
        {recipeStep: "Cook meat in skillet on med-high heat", recipeId: 1},
        {recipeStep: "Warm taco shells in oven on low", recipeId: 1},
        {recipeStep: "Toast buns on buttered skillet", recipeId: 2},
        {recipeStep: "Slice potatoes into strips", recipeId: 2},
        {recipeStep: "Fry potatoe strips in cooking oil on high", recipeId: 2},
        {recipeStep: "Mix flour, milk and eggs in large bowl", recipeId: 3},
        {recipeStep: "Cook bacon on med heat in oven", recipeId: 3},
        {recipeStep: "Cook sausage links in skillet", recipeId: 3},
        {recipeStep: "Pour pancake mix on flat-top in small dollops", recipeId: 3},
        {recipeStep: "Flip pancake after bubbles are visable on surface of pancake", recipeId: 3},

     
    ]);
  };