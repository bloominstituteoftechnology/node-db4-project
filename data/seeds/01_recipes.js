exports.seed = async function(knex) {
    await knex("recipes").insert([
        { recipe_name: "Cookies", oven_temp: "375", bake_time: "45"}
    ])
}