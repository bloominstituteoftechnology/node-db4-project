exports.seed = function(knex) {
  return knex('ingredients').insert([   
    { ingredient_name: "olive oil" },             // 1
    { ingredient_name: "cherry tomatoes" },       // 2
    { ingredient_name: "Salt" },                  // 3                  
    { ingredient_name: "Pepper" },                // 4
    { ingredient_name: "eggs" },                  // 5
    { ingredient_name: "basil" },                 // 6
    { ingredient_name: "chicken " },              // 7
    { ingredient_name: "small bulb fennel" },     // 8
    { ingredient_name: "spinach" },               // 9
    { ingredient_name: "wheat baguette" },        // 10
    { ingredient_name: "Parmesan" },              // 11
    { ingredient_name: "tomatoes" },              // 12
    { ingredient_name: "white beans" }            // 13
  ]);
};