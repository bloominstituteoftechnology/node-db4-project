
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'Oil'}, // 1
        {name: 'Potatoes'}, // 2
        {name: 'Buns'}, // 3
        {name: 'Ground Beef'}, // 4
        {name: 'Onions'}, // 5
        {name: 'Lettuce'}, // 6
        {name: 'Tomato'}, // 7
        {name: 'Cheese'}, // 8
        {name: 'Pasta'} // 9
      ]);
};

//Cheeseburger - 1, 3, 4, 5, 6, 7, 8
//Mac & Cheese - 9, 8
