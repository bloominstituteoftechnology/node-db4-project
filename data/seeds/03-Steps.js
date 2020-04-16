
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {Instructions:"Mix the thing to the other thing",stepNumber:"1",RecipeID:"1"},
        {Instructions:"Bake it for 10 mins only",stepNumber:"2",RecipeID:"1"},
        {Instructions:"Drop it to the floor",stepNumber:"3",RecipeID:"1"},
        {Instructions:"Find some uranium",stepNumber:"1",RecipeID:"2"},
      ]);
    });
};
