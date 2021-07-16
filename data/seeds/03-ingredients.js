const ingredients = ['mayo', 'bacon', 'tomato', 'lettuce', 'peanut butter']

exports.seed = knex => {
    return knex('ingredients').del()
    .then(() => {
        return knex('ingredients').insert(ingredients.map(ing => {
            return {ingredient_name: ing}
        }))
    })
}