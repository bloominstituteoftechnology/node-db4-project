exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { ingredient_name: 'Pound of Rice Flour', quantity: 1 },
    { ingredient_name: 'Can of Sweetened Condensed Milk', quantity: 1 },
    { ingredient_name: 'Can of Evaporated Milk', quantity: 1 },
    { ingredient_name: 'Can of Coconut Milk', quantity: 1 },
    { ingredient_name: 'Teaspoon of Cinnamon', quantity: 2 },
    { ingredient_name: 'Teaspoon of Salt', quantity: 1 },
    { ingredient_name: 'Teaspoon of Baking Soda', quantity: 1 },
    { ingredient_name: 'Tablespoon of Olive Oil', quantity: 2 },
    { ingredient_name: 'Cups of Rum', quantity: 2 },
    { ingredient_name: 'Teaspoon of Nutmeg', quantity: 1 },
    { ingredient_name: 'Tablespoon of Limon Juice', quantity: 2 },
    { ingredient_name: 'Loaf of Bread', quantity: 1 },
    { ingredient_name: 'Gram of Butter', quantity: 2 }
  ]);
};