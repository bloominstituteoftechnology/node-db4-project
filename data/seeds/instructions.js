exports.seed = async function(knex) {
  await knex("instructions").insert([  
    { instructions: "Step1", step_number: 1, recipe_id: 1}, 
		{ instructions: "Step2", step_number: 2, recipe_id: 1},
    { instructions: "Step3", step_number: 3, recipe_id: 1},
    { instructions: "Step4", step_number: 4, recipe_id: 1},
		{ instructions: "Step1", step_number: 1, recipe_id: 2},
    { instructions: "Step2", step_number: 2, recipe_id: 2},
    { instructions: "Step3", step_number: 3, recipe_id: 2},
    { instructions: "Step4", step_number: 4, recipe_id: 2},
	])
};