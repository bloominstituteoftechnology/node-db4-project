exports.seed = async function(knex) {
  await knex("steps").insert([
    { id: 1, instruction: "cut pepperoni" },
    { id: 2, instruction: "crush oreo" },
    { id: 3, instruction: "sprinkle oreo" },
    { id: 4, instruction: "pour milk into container" },
    { id: 5, instruction: "toss dough" },
    { id: 6, instruction: "stir contents" },
    { id: 7, instruction: "add ice" },
    { id: 8, instruction: "blend contents" }
  ]);
};
