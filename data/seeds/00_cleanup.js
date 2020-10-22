exports.seed = async function(knex) {
    await knex("recipe_ing").truncate()
    await knex('ingredients').truncate()
    await knex('recipes').truncate()
}