const recipes = [
    { recipe_name: 'Toasted Peanut Better and Jelly' },
    { recipe_name: 'Frosted Flakes with Banana Slices'},
    { recipe_name: 'Cheeseburger'},
]

const ingredients = [
    { ingredient_name:'Bread', ingredient_unit:'slices'},
    { ingredient_name:'Peanut Butter', ingredient_unit:'grams'},
    { ingredient_name:"Jelly", ingredient_unit:'grams'},

    { ingredient_name:'Frosted Flakes', ingredient_unit: 'cups'},
    { ingredient_name:'Banana', ingredient_unit:'grams'},
    { ingredient_name:'Milk', ingredient_unit:'cups'},

    { ingredient_name:'Ground Beef', ingredient_unit:'grams'},
    { ingredient_name:'Burger Buns', ingredient_unit:'pack'},
    { ingredient_name:'Cheese', ingredient_unit:'sclices'}

]

const step_ingredients = [

    //Toasted Peanut Better and Jelly
    { step_id: 1, ingredients_id: 1, quantity: 4 },
    { step_id: 2, ingredients_id: 2, quantity: 3 },
    { step_id: 3, ingredients_id: 3, quantity: 3 },

    //Frosted Flakes with Banana Slices 
    { step_id: 4, ingredients_id: 4, quantity: 1.5},
    { step_id: 5, ingredients_id: 5, quantity: 2 },
    { step_id: 6, ingredients_id: 6, quantity: 1 },

    //Cheeseburger
    { step_id: 8, ingredients_id: 7, quantity: 6 },
    { step_id: 9, ingredients_id: 8, quantity: 1 },
    { step_id: 10, ingredients_id: 9, quantity: 2 }
]

const steps = [

    //Toasted Peanut Better and Jelly
    { step_text:'Put bread in toaster', step_number: 1, recipe_id: 1 },
    { step_text:'Take bread out and add peanut to one side', step_number: 2, recipe_id: 1 },
    { step_text:'Take bread out and add jelly to the other side', step_number: 3, recipe_id: 1 },

    //Frosted Flakes with Banana Slices 
    { step_text:'Grab bow and fill it with Frosted Flakes', step_number: 1, recipe_id:2 },
    { step_text:'Cut up Banana and add it to bowl', step_number: 2, recipe_id: 2 },
    { step_text:'Add Milk', step_number: 3, recipe_id: 2 },
    
    //Cheeseburger
    { step_text:'Heat up pan', step_number: 1, recipe_id: 3 },
    { step_text:'Make Ground Beef in to patties and add top pan', step_number: 2, recipe_id: 3 },
    { step_text:'Put Cheese on top of the Ground Beef while it cooks', step_number: 3, recipe_id: 3 },
    { step_text:'Add Burger to Burger Bun', step_number: 4, recipe_id: 3 },
    
]



exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
   
}