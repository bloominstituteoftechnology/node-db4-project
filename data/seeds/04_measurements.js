exports.seed = async function (knex) {
    await knex("measurements").insert([
        { measurement: 1, unit: "", ingredientId: 1 },
        { measurement: 3, unit: "scoops", ingredientId: 1 },
        { measurement: 5, unit: "spoonfulls", ingredientId: 1 },
        { measurement: 2, unit: "squirts", ingredientId: 1 },
        { measurement: 2, unit: "", ingredientId: 1 },
        { measurement: 4, unit: "shakes", ingredientId: 1 },
        { measurement: 2, unit: "", ingredientId: 1 },
    ]);
};