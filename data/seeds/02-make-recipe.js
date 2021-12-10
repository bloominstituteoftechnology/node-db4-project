const recipes = [
    {recipe_name: "Pasta Alla Gricia"},
    {recipe_name: "Chicken Fettuccine Alfredo"},
    {recipe_name: "Pesto Pasta"},
]

const ingredients=[
    {ingredient_name: "bacon", ingredient_unit: "lbs"},
    {ingredient_name: "sauce", ingredient_unit: "lbs"},
    {ingredient_name: "pasta", ingredient_unit: "lbs"},
    {ingredient_name: "ham", ingredient_unit: "slices"},
    {ingredient_name: "chicken", ingredient_unit: "kilos"},
    {ingredient_name: "pesto", ingredient_unit: "grams"},
]

const step_ingredients=[
    // Pasta Alla Gricia
    {step_id:2, ingredient_id:1, quantity:1},
    {step_id:3, ingredient_id:2, quantity:1.5},
    {step_id:3, ingredient_id:3, quantity:2},

    // Chicken Fettuccine Alfredo
    {step_id:5, ingredient_id:4, quantity:1},
    {step_id:5, ingredient_id:5, quantity:0.4},

    // Pesto
    {step_id:7, ingredient_id:6, quantity:1},
]

const steps=[
    // Pasta Alla Gricia
    {step_text:"heat skillet", step_number:1, recipe_id:1},
    {step_text:"cook pasta", step_number:2, recipe_id:1},
    {step_text:"add sauce to pasta", step_number:3, recipe_id:1},

    // Chicken Fettuccine Alfredo
    {step_text:"heat oven", step_number:1, recipe_id:2},
    {step_text:"cook chicken in the oven on 500 degrees for 20 minutes", step_number:2, recipe_id:2},
    {step_text:"cook pasta and sauce", step_number:3, recipe_id:2},

    // Pesto Pasta
    {step_text:"cook pasta", step_number:1, recipe_id:3},
    {step_text:"make pesto sauce with basil, olive oil, and parmesan", step_number:2, recipe_id:3},
]

exports.seed = async function(knex){
   await knex("recipes").insert(recipes)
   await knex("ingredients").insert(ingredients)
   await knex("steps").insert(steps)
   await knex("step_ingredients").insert(step_ingredients)
} 