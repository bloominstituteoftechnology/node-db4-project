const db = require("../../data/db-config.js")

function findById(recipe_id) {
    return db("recipes as r")
    .select("r.*","st.*","sti.amount","i.*")
    .where("r.recipe_id", recipe_id)
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("stepingredients as sti", "st.step_id", "sti.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "sti.ingredient_id")
    .orderBy("st.step_number", "asc")
    .then(data=>{
        if (!data || Object.keys(data).length === 0){
            return []
        }
        let arr = []
        data.map(step=>{
            console.log(step)
            if (!step.recipe_id){
                return arr
            }
            let exists = false
            arr.map(steps=>{
                if (steps.step_id == step.step_id){
                    exists = true
                    if (step.amount) {
                        let ingredient = {
                            ingredient_id: step.ingredient_id,
                            ingredient_name: step.ingredient_name,
                            amount: step.amount
                        }
                        return steps.ingredients.push(ingredient)
                    }
                    else {
                        return steps
                    }
                }
                return steps
            })
            if (!exists){
                let newStep = {
                    step_id: step.step_id,
                    step_number: step.step_number,
                    instructions: step.instructions,
                }
                if (step.amount) {
                    newStep.ingredients = []
                    let ingredient = {
                        ingredient_id: step.ingredient_id,
                        ingredient_name: step.ingredient_name,
                        amount: step.amount
                    }
                    newStep.ingredients.push(ingredient)
                    
                } else {
                    newStep.ingredients = []
                }
                arr.push(newStep)
            }
        })
        let finalObject = {
            recipe_id: data[0].recipe_id,
            recipe_name: data[0].recipe_name,
            steps: arr
        }
        return finalObject
    })
}

module.exports = {findById}