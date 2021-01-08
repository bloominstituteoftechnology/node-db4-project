
exports.seed = async function (knex) {
    await knex("instructions").insert([
        {
            instruction:
                "Take Bananas and cut them in half down the middle, layer them on the bottom of your bowl",
            recipeId: 1,
        },
        {
            instruction:
                "Scoop Icecream out of the punnet and place on top of Bananas",
            recipeId: 1,
        },
        { instruction: "Squirt Whipped Cream over Icecream", recipeId: 1 },
        { instruction: "Drizzle with Chocolate Syrup", recipeId: 1 },
        { instruction: "Shower Sprinkles over icecream", recipeId: 1 },
        { instruction: "Finish by placing wafers into Icecream", recipeId: 1 },
    ]);
};