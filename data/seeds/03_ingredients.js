exports.seed = async function (knex) {
    await knex("ingredients").insert([
        { ingredient: "Bananas", recipeId: 1 },
        { ingredient: "Ice Cream", recipeId: 1 },
        { ingredient: "Whipped Cream", recipeId: 1 },
        { ingredient: "Chocolate Syrup", recipeId: 1 },
        { ingredient: "Cherry", recipeId: 1 },
        { ingredient: "sprinkles", recipeId: 1 },
        { ingredient: "Wafer", recipeId: 1 },
    ]);
};