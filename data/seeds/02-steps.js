exports.seed = function (knex, Promise) {
  return knex("steps").insert([
      { step_number:1, instructions:'wash rice', recipe_id:1},
      { step_number:2, instructions:'put water in rice', recipe_id:1},
      { step_number:3, instructions:'cook rice', recipe_id:1},
      { step_number:4, instructions:'mix tuna and mayo', recipe_id:1},
      { step_number:5, instructions:'mix rice with tuna and mayo and enjoy', recipe_id:1},
      {step_number:1, instructions:'in a blender add in coconut milk' ,recipe_id:2},
      {step_number:2, instructions:'add in a scoop of protein powder' ,recipe_id:2},
      {step_number:3, instructions:'add in pb-fit powder' ,recipe_id:2},
      {step_number:4, instructions:'add in honey' ,recipe_id:2}

    ]);
};
