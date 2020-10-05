//* seed files are to add data to the database in one go. They return the data in an array (of objects) *// 
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, 
          name: 'Asparagus Quiche',
          instructions: `1. Whisk eggs, beat in spice and milk.
          2. Pour over packed layer of hashbrowns add asparagus. 
          3. Bake at 350 for 25 mins.`
        },
        {
          id: 2, 
          name: 'PB&J',
          instructions: `1. Spread peanut butter. 
          2. Spread jelly
          3.Close the fuckin sandwich`
        },
        {
          id: 3, 
          name: 'Ramen Noodles',
          instructions: `1. Boil water.
          2. Add the noodles.
          3. Pour it in a bowl and sear your mouth because you're an animal who won't wait for it to cool.`
        }
      ]);
    });
};
