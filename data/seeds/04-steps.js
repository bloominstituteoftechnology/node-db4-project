const steps = [
    // Spaghetti Bolognese
    { recipe_id: 1, ingredient_number:1, instructions: "Put a large saucepan on a medium heat" },
    { recipe_id: 1, ingredient_number:2, instructions: "Add 1 tbsp olive oil" },
    { recipe_id: 1, ingredient_number:3, instructions: "Add 1 chopped onions" },
    { recipe_id: 1, ingredient_number:3, instructions: "Add 1 chopped Bell-pepper" },
    { recipe_id: 1, ingredient_number:3, instructions: "Add 1 bag of corns" },
    { recipe_id: 1, ingredient_number:4, instructions: "Add sausage" },
    { recipe_id: 1, ingredient_number:4, instructions: "Add chicken" },

]

exports.seed = async function(knex) {
    await knex('steps').insert(steps)
};
