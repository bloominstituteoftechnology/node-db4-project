
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: "Meat", recipes_id: 1 },
        {name: "Salt", recipes_id: 1},
        {name: "Pepper", recipes_id: 1},
        {name: "Bread", recipes_id: 2},
        {name: "Bananas", recipes_id: 2},
        {name: "Water", recipes_id: 3},
        {name: "PO TAY TOES", recipes_id: 3},
        {name: "Rabbit", recipes_id: 3},
        {name: "Lembas Bread", recipes_id: 3}
      ]);
};
