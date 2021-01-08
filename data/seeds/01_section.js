exports.seed = async function (knex) {
    await knex("section").insert([{ section: "Dessert" }]);
};