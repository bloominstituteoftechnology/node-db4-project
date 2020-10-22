exports.seed = async function(knex) {
    await knex("ingredients").insert([
        {ingredient_name: "chocolate chips", quantity_needed: "1 cup"}
    ])
}