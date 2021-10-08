const db = require("../../data/db-config");

const getAll = () => {
  return db("recipes");
};

async function getRecipeById(id) {
  const rows = await db("recipes as r")
    .join("steps as st", "r.recipe_id", "st.recipe_id")
    .where("r.recipe_id", id)
    .select("r.*", "st.step_id", "st.step_number", "st.step_instruction");

  console.log(rows);

  const result = {
    recipe_id: id,
    recipe_name: rows[0].recipe_name,
    // steps: rows.map((item) => {
    //   item.step_id, item.step_number, item.step_instruction;
    // }),
  };
  return result;
}

module.exports = {
  getAll,
  getRecipeById,
};
