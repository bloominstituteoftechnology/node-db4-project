/* async function getRecipeById(recipe_id) {
    const recipe = await db
      .select(
        "r.recipe_name",
        "st.step",
        "st.step_number",
        "st_ing.quantity",
        "ing.ing_id",
        "ing.ingredient_name"
      )
      .from("recipes as r")
      .where({ "r.rec_id": recipe_id })
      .leftJoin("steps as st", "st.recipe_id", "r.rec_id")
      .groupBy("st.step_number")
      .orderBy("st.step_number")
      .groupBy("st.step")
      .leftJoin("steps_ingredients as st_ing", "st_ing.id", "st.ste_id")
      .leftJoin("ingredients as ing", "ing.ing_id", "st_ing.ingredient_id")
      .groupBy("ing.ing_id");
    const ingArr = recipe.map((ing) => {
      return {
        ingredient_id: ing.ing_id,
        ingredients: ing.ingredient_name,
        quantity: ing.quantity,
      };
      return ingArr;
    });
    const newObj = {
      recipe_id: recipe[0].rec_id,
      recipe_name: recipe[0].recipe_name,
      steps: recipe.map((step) => {
        return {
          step_id: step.ste_id,
          step_number: step.step_number,
          step_instructions: step.step,
          ingredients: ingArr,
        };
      }),
    };
    return newObj;
  } */
