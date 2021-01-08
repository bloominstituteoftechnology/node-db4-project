exports.seed = async function (knex) {
    await knex("recipes").insert([{ recipeName: "Banana Split", sectionId: 1 }]);
};