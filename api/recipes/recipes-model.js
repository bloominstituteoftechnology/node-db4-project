const db = require('../../data/db-config');

async function getRecipeById(id) {
    const recipeRows = await db("recipes as r")
        .join("steps as s", "s.recipe_id", "r.recipe_id")
        .leftJoin("ingredients_for_steps as ifs", "ifs.step_id", "s.step_id")
        .leftJoin("ingredients as i", "i.ingredient_id", "ifs.ingredient_id")
        .select(
            "r.recipe_id",
            "r.recipe_name",
            "r.created_at",
            "s.step_id",
            "s.step_number",
            "s.step_instructions",
            "i.ingredient_id",
            "i.ingredient_name",
            "ifs.quantity",
            "ifs.quantity_unit"
        )
        .where("r.recipe_id", id)
        .orderBy("s.step_number", "asc")

        const recipeObj = {};
        recipeRows.forEach(row => {
            if (!recipeObj.recipe_id || !recipeObj.recipe_name || !recipeObj.created_at) {
                recipeObj.recipe_id = row.recipe_id;
                recipeObj.recipe_name = row.recipe_name;
                recipeObj.created_at = row.created_at;
                recipeObj.steps = []
            }
            if (!recipeObj.steps[row.step_number - 1] && row.step_id) {
                recipeObj.steps.push({
                    "step_id": row.step_id,
                    "step_number": row.step_number,
                    "step_instructions": row.step_instructions,
                    "ingredients": [],
                })
            }
            if (row.ingredient_id) {
                recipeObj.steps[row.step_number - 1].ingredients.push({
                    "ingredient_id": row.ingredient_id,
                    "ingredient_name": row.ingredient_name,
                    "quantity": row.quantity,
                    "quantity_unit": row.quantity_unit
                })
            }

        })

        return recipeObj;
};

module.exports = {
    getRecipeById
}