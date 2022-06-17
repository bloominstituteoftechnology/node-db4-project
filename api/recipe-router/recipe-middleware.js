const {findId} = require('./recipe-model')


function validRecipeId(req, res, next){
    const {id} = req.params
    findId(id)
        .then(result=>{
            return result.length > 0 ? next() : res.status(400).json({message:'Recipe id not valid'})
        })
        .catch(next)
}

module.exports = {
    validRecipeId
}