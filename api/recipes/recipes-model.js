const db = require('../../data/dbConfig')
const { steps } = require('../../data/seeds/03-steps')

const getAll = () => {
    const rows = db('recipes')
    return rows
}

const getById = async (recipe_id) => {
     const recipeRows = await db('recipes as r')
        .select('r.*', 'st.*', 'i.*', 'sti.*')
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .leftJoin('steps_ingredients as sti', 'st.steps_id', 'sti.steps_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'sti.steps_ingredients_id')
        .where('r.recipe_id', recipe_id)
        // .orderBy('st.step_number')

        const result = {
            recipe_id: recipeRows[0].recipe_id,
            recipe_name: recipeRows[0].recipe_name,
            created_at: recipeRows[0].created_at,
            steps: recipeRows.reduce((acc, row)=> {
                if (!row.ingredient_id) {
                    return acc.concat({
                        step_id: row.step_id,
                        step_number: row.step_number,
                        instructions: row.instructions
                    })
                }
                if (row.ingredient_id && !acc.find(step => step.step_id === row.step_id)) {
                    return acc.concat({
                        step_id: row.step_id,
                        step_number: row.step_number,
                        instructions: row.instructions,
                        ingredients: [
                            {
                                ingredient_id: row.ingredient_id,
                                ingredient_name: row.ingredient_name,
                                quantity: row.quantity
                            }
                        ]
                    })
                }
                return acc
            }, [])
        }
    
    return result

}


// const getById = async (recipe_id) => {
//     return db('recipes as r')
//         .select('r.*', 'st.*', 'i.*', 'sti.*')
//         .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
//         .leftJoin('steps_ingredients as sti', 'st.steps_id', 'sti.steps_id')
//         .leftJoin('ingredients as i', 'i.ingredient_id', 'sti.steps_ingredients_id')
//         .where('r.recipe_id', recipe_id)
//         .then(data => {
//             if (!data) {
//                 return []
//             }
//             let arr = []
//             data.map(step => {
//                 if (!step.recipe_id) {
//                     return arr
//                 }
//                 let exists = false
//                 arr.map(steps => {
//                     if (steps.step_id === step.step_id) {
//                         exists = true
//                         if (step.quantity) {
//                             let ingredient = {
//                                 ingredient_id: step.ingredient_id,
//                                 ingredient_name: step.ingredient_name,
//                                 quantity: step.quantity
//                             }
//                             return steps.ingredients.push(ingredient)
//                         } else {
//                             return steps
//                         }
//                     }
//                     return steps
//                 })
//                 if (!exists) {
//                     let newStep = {
//                         step_id: step.step_id,
//                         step_number: step.step_number,
//                         step_instructions: step.step_instructions
//                     }
//                     if (step.quantity) {
//                         newStep.ingredients = []
//                         let ingredient = {
//                             ingredient_id: step.ingredient_id,
//                             ingredient_name: step.ingredient_name,
//                             quantity: step.quantity
//                         }
//                         newStep.ingredients.push(ingredient)
//                     } else {
//                         newStep.ingredients = []
//                     }
//                     arr.push(newStep)
//                 }
//             })
//             const finalObject = { 
//                 recipe_id: data[0].recipe_id,
//                 recipe_name: data[0].recipe_name,
//                 steps: arr 
//             }
//             return finalObject
//         })
        

    
// }


// const getById = async (recipe_id) => {
//     const stepsArray = []
//     const ingredientsArray = []
//     const rows = await db('recipes as r')
//         .select('r.*', 'st.*', 'i.*', 'sti.*')
//         .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
//         .leftJoin('steps_ingredients as sti', 'st.steps_id', 'sti.steps_id')
//         .leftJoin('ingredients as i', 'i.ingredient_id', 'sti.steps_ingredients_id')
//         .where('r.recipe_id', recipe_id)
        
//     // rows.map(row => {
//     //     stepsArray.push({ 
//     //         step_id: row.steps_id,
//     //         step_number: row.step_number,
//     //         step_instructions: row.instructions,
//     //         ingredients: ingredientsArray
//     //         })
//     //     rows.map(ingredients => {
//     //         console.log(ingredients)
//     //         if (row.step_id === ingredients.step_id) {
//     //             ingredientsArray.push({
//     //                 ingredient: ingredients.ingredient_name,
//     //                 ingredient_id: ingredients.ingredient_id,
//     //                 quantity: ingredients.quantity
//     //             })
//     //         } else {
//     //             return []
//     //         }
//     //     })
//     // })

//     // rows.map(row => {
//     //     console.log(row)
//     //     ingredientsArray.push({
//     //         ingredient: row.ingredient_name,
//     //         ingredient_id: row.ingredient_id,
//     //         quantity: row.quantity
//     //     })
//     // })
    

//     const result = {
//         recipe_id: rows[0].recipe_id,
//         recipe_name: rows[0].recipe_name,
//         created_at: rows[0].created_at,
//         steps: stepsArray
//     }

//     return result
// }

module.exports = {
    getAll,
    getById
}