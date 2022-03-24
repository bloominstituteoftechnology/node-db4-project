exports.seed = async function (knex) {
  await knex("recipes").insert([
    { recipe: "cereal" },
    { recipe: "toast" },
    { recipe: "butter noodles" },
  ]);
};
