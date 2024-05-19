const db = require('../../data/db-config')


async function getById(id) {
// 	{
//   "recipe_id" : 1,
//   "recipe_name": "Spaghetti Bolognese",
//   "created_at": "2021-01-01 08:23:19.120",
//   "steps": [
//     {
//       "step_id": 11,
//       "step_number": 1,
//       "step_instructions": "Put a large saucepan on a medium heat",
//       "ingredients": []
//     },
//     {
//       "step_id": 12,
//       "step_number": 2,
//       "step_instructions": "Add 1 tbsp olive oil",
//       "ingredients": [
//         { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//       ]
//     },
//   ]
// }

// {
//         "ingredient_step_info_id": 1,
//         "recipe_id": 1,
//         "step_id": 1,
//         "ingredient_id": 1,
//         "ingredient_quantity": 2
//     },
	const data = await db('ingredient_step_info')
		.where('recipe_id', id)

	let newData = [];

		for(let i = 0; i < data.length; i++) {
			let obj = data[i];
			let { recipe_id, step_id, ingredient_step_info, ingredient_id, ingredient_quantity } = obj

			// find step_id with step number
			const step = await db('steps')
				.select('step_number', 'instruction')
				.where('step_id', step_id)

				// 2	In a pan, sauté minced garlic in olive oil until golden.
			let { instruction, step_number} = step[0]

			const ingredient = await db('ingredients')
				.select('ingredient_name')
				.where('ingredient_id', ingredient_id)

				let ingredientArray = []

				for (let i = 0; i < ingredient.length; i++) {
					let obj = {
						ingredient_id: ingredient_id,
						ingredient_name: ingredient[i].ingredient_name,
						quantity: ingredient_quantity
					}
					ingredientArray.push(obj)
				}

				const newObj = {
					step_id: step_id,
					step_number: step_number,
					step_instructions: instruction,
					ingredients: ingredientArray
				}

				newData.push(newObj)

//{
//       "step_id": 12,
//       "step_number": 2,
//       "step_instructions": "Add 1 tbsp olive oil",
//       "ingredients": [
//         { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//       ]
//     },

			
		}
	return newData
}

module.exports = {
	getById
}