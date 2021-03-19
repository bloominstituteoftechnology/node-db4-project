const getIngredients = (data) => {
  return data.reduce((acc, val) => {
    if (val.ingredient_id) {
      return (
        acc.concat((({step_number, ingredient_id, ingredient_name, quantity}) => {
          return ({step_number, ingredient_id, ingredient_name, quantity})
        })(val))
      )
    }
    return acc
  }, [])
}

const removeDuplicates = (data) => {
  return data.reduce((acc, val) => {
    const found = acc.find(elem => elem.step_number === val.step_number);
    if (!found) {
      return acc.concat([val]);
    } else {
      return acc;
    }
  }, []);
};

const addIngredients = (filteredSteps, data) => {
  const ingredients = getIngredients(data);
  for (let i=0; i < filteredSteps.length; i++) {
    filteredSteps[i].ingredients = ingredients.reduce((acc, ing) => {
      if (ing.step_number === filteredSteps[i].step_number) {
        return acc.concat((({ingredient_id, ingredient_name, quantity}) => {
          return ({ingredient_id, ingredient_name, quantity})
        })(ing))
      } else {
        return acc
      }
    }, [])
  }
  return filteredSteps
}

const getSteps = (data) => {
  const steps = data.reduce((acc, val) => {
    if (val.step_id) {
      return (
        acc.concat((({step_id, step_number, step_instruction}) => {
          return ({step_id, step_number, step_instruction})
        })(val))
      )
    }
    return acc
  }, [])
  const filteredSteps = removeDuplicates(steps);

  return filteredSteps;
}

const getById = async (recipe_id) => {
  const recipeData = await db('recipes as r')
    .column(
      'r.recipe_id',
      'r.recipe_name',
      'r.created_at',
      's.step_id',
      's.step_instruction',
      's.step_number',
      'si.quantity',
      'i.ingredient_id',
      'i.ingredient_name',
      'si.quantity'
    )  
    .join('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('steps_ingredients as si','s.step_id', 'si.step_id')
    .leftJoin('ingredients as i','si.ingredient_id', 'i.ingredient_id')
    .where('r.recipe_id', recipe_id)
  
  const steps = getSteps(recipeData);

  const stepsWithIngredients = addIngredients(steps, recipeData);

  const returnRecipe = {
    recipe_id: recipeData[0].recipe_id,
    recipe_name: recipeData[0].recipe_name,
    created_at: recipeData[0].created_at,
    steps: stepsWithIngredients
  };

  return returnRecipe;
};

module.exports = { getById }