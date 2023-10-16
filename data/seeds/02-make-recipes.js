const recipes = [
    { recipe_name: 'Kylling Pasta' },
    { recipe_name: 'Choko Smaakager'},
    { recipe_name: 'Roede Groede med Floede'},
]

const ingredients = [
    { ingredient_name: 'Kylling', ingredient_unit: 'lbs'},
    { ingredient_name: 'Pasta', ingredient_unit: 'lbs'},
    { ingredient_name: 'Chokolade', ingredient_unit: 'cups'},
    { ingredient_name: 'Smaakager', ingredient_unit: 'cups'},
    { ingredient_name: 'Frugt', ingredient_unit: 'lbs'},
    { ingredient_name: 'Floede', ingredient_unit: 'cups'},

]

const step_ingredients = [
    //kylling
    { step_id: 1, ingredient_id: 1, quantity: 1},
    { step_id: 2, ingredient_id: 2, quantity: 2},
    //smaakager
    { step_id: 1, ingredient_id: 3, quantity: 1},
    { step_id: 2, ingredient_id: 4, quantity: 3},
    //tonguetwister
    { step_id: 1, ingredient_id: 5, quantity: 1},
    { step_id: 2, ingredient_id: 5, quantity: 1},
    { step_id: 3, ingredient_id: 6, quantity: 1},
]

const steps = [
    //kylling
    { step_text: 'Grill the chicken', step_number: 1, recipe_id: 1  },
    { step_text: 'Boil the pasta', step_number: 2, recipe_id: 1  },
    { step_text: 'Create the sauce', step_number: 3, recipe_id: 1  },
    { step_text: 'Combine the components', step_number: 4, recipe_id: 1  },
    //smaakager
    { step_text: 'Chop the chocolate', step_number: 1, recipe_id: 2  },
    { step_text: 'Mix the dough', step_number: 2, recipe_id: 2  },
    { step_text: 'Bake the cookies', step_number: 3, recipe_id: 2  },
    { step_text: 'Impress the cookies', step_number: 4, recipe_id: 2  },
    //tonguetwister
    { step_text: 'Mascerate the berries', step_number: 1, recipe_id: 3  },
    { step_text: 'Mash the berries', step_number: 2, recipe_id: 3  },
    { step_text: 'Add the cream', step_number: 3, recipe_id: 3  },
]


exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredient').insert(step_ingredient)
}