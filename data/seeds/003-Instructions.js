
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        { Recipe_Id: 1, Step_Number: 1, Step: 'Crack Eggs' },
        { Recipe_Id: 1, Step_Number: 2, Step: 'Put Eggs into frying pan' },
        { Recipe_Id: 1, Step_Number: 3, Step: 'STIR AND EAT IT' },
        { Recipe_Id: 2, Step_Number: 1, Step: 'Open Ramen and insert water' },
        { Recipe_Id: 2, Step_Number: 2, Step: 'Microwave it for 5mins' },
        { Recipe_Id: 2, Step_Number: 3, Step: 'CONSUME YOUR SOUP' },
        { Recipe_Id: 3, Step_Number: 1, Step: 'Get Bread' },
        { Recipe_Id: 3, Step_Number: 2, Step: 'Put in Toaster for 3mins' },
        { Recipe_Id: 3, Step_Number: 3, Step: 'Throw Toaster at Bread to assert dominance' }
      ]);
    });
};
