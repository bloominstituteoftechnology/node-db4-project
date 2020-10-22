exports.seed = async function(knex) {
    await knex("recipe_ing").insert([
        {recipe_id: 1, ingrediant_id: 1, date_created:"2012-07-29"}
    ])
}