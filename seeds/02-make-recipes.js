
const recipes = [
    {recipe_name: "Cheezeburger Slam"},
    {recipe_name: "Wazoo wushu"},
    {recipe_name: "Salamander kabab"},
]

const ingredients = [
    { ingredient_name: "meat", ingredient_unit: "lbs"},
    { ingredient_name: "wazoo", ingredient_unit: "lbs"},
    { ingredient_name: "salamander", ingredient_unit: "lbs"},
    { ingredient_name: "whiskey", ingredient_unit: "liters"},
    { ingredient_name: "rum", ingredient_unit: "liters"},
    { ingredient_name: "beer", ingredient_unit: "ounces"}
]

const step_ingredients = [
    //Cheezeburger
    {step_id: 2, ingredient_id: 1, quantity:1},
    {step_id: 3, ingredient_id: 2, quantity: 10},
    {step_id: 3, ingredient_id: 3, quantity: 11 },
    //Wushu
    {step_id: 5, ingredient_id: 4, quantity: 44 },
    {step_id: 5, ingredient_id: 5, quantity: 17 },
    //Salamander
    {step_id: 7, ingredient_id: 6, quantity: 99},
]
const steps = [
    //Cheezeburger steps
    {step_text: "catch a cow", step_number: 1, recipe_id:1 },
    {step_text: "get the meat", step_number: 2, recipe_id:1 },
    {step_text: "grill that burger", step_number: 3, recipe_id:1 },
    //Wazoo wushu steps
    {step_text: "Find a wazoo", step_number:1 , recipe_id: 2},
    {step_text: "add wushu", step_number:2 , recipe_id: 2},
    {step_text: "fry", step_number: 3, recipe_id: 2},
    //Salamander kabab
    {step_text: "catch a 'mander", step_number: 1, recipe_id: 3},
    {step_text: "skewer it", step_number: 2 , recipe_id: 3}
]
exports.seed = async function (knex){
    await knex("recipes").insert(recipes)
    await knex("ingredients").insert(ingredients)steps
    await knex("steps").insert(steps)
    await knex("step_ingredients").insert(step_ingredients)
}