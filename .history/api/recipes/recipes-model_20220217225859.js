function getRecipeById(recipe_id) {
    return Promise.resolve('working', server.use('*', (req, res) => {
        res.json({ API: 'online' });
    });)
}

module.exports = { getRecipeById }