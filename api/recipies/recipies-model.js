const db = require("../../data/db-config");

const findById = async (recipie_id) => {
  // get all the ingredients related to a recipie
  const stepsArr = await db("recipies as r")
    .leftJoin("steps as s", "r.recipie_id", "s.recipie_id")
    .leftJoin("step_ingredients as si", "s.step_id", "si.step_id")
    .leftJoin("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .where("r.recipie_id", recipie_id)
    .select("i.*", "s.step_id", "s.step_instructions", "s.step_number", "r.*")
    .orderBy("s.step_number");

  return {
    recipie_id: stepsArr[0].recipie_id,
    recipie_name: stepsArr[0].recipie_name,
    created_at: stepsArr[0].created_at,
    steps: stepsArr.map((step) => {
      return {
        step_id: step.step_id,
        step_number: step.step_number,
        step_instructions: step.step_instructions,
        ingredients: [],
      };
    }),
  };

  //   return {
  //     recipie_id: recipieArr[0].recipie_id,
  //     recipie_name: recipieArr[0].recipie_name,
  //     created_at: recipieArr[0].created_at,
  //     steps: recipieArr.map((step) => {
  //       return {
  //         step_id: step.step_id,
  //         step_number: step.step_number,
  //         step_instructions: step.step_instructions,
  //         ingredients: [],
  //       };
  //     }),
  //   };
};

module.exports = { findById };
