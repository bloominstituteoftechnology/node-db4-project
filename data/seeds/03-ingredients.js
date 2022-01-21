exports.seed = function (knex, Promise) {
    return knex("ingredients").insert([
        {ingredient_name:'rice'},
        {ingredient_name:'water'},
        {ingredient_name:'tuna'},
        {ingredient_name:'mayo'},
        {ingredient_name:'coconut milk'},
        {ingredient_name:'chocolate protein powder'},
        {ingredient_name:'pb-fit powder'},
        {ingredient_name:'honey'}
      ]);
  };