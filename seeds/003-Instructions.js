exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Instructions').truncate()
    .then(function () {
      // Inserts seed entries
     return knex('Instructions').insert([
        { Recipe_Id: 1, Step_Number: 1, Step: 'Pour milk into bowl' },
        { Recipe_Id: 1, Step_Number: 2, Step: 'Pour cereal into bowl with milk' },
        { Recipe_Id: 1, Step_Number: 3, Step: 'Use a spoon to enjoy' },
        { Recipe_Id: 2, Step_Number: 1, Step: 'pour water into coffee maker' },
        { Recipe_Id: 2, Step_Number: 2, Step: 'Pour coffee grounds into coffee maker' },
        { Recipe_Id: 2, Step_Number: 3, Step: 'Place cup in coffee maker and brew' },
        { Recipe_Id: 3, Step_Number: 1, Step: 'Crack egg into hot frying pan' },
        { Recipe_Id: 3, Step_Number: 2, Step: 'scramble eggs until desired doneness' },
        { Recipe_Id: 3, Step_Number: 3, Step: 'Plate eggs and enjoy with a fork' }
      ]);
    });
};