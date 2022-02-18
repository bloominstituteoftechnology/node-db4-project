const router = require('express').Router()
const mw = require('./recipes-middleware')

router.use("/:id",mw.checkRecipesId, async (req, res, next)=>{
    try{
        // throw new Error('ARRRR')
        res.json(req.recipe)
    }catch(err){
        next(err)
    }
})

router.use("*", (req, res)=>{
    res.json({api: "up"})
})
router.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(err.status||500).json({
        message: err.message,
        stack: err.stack
    })
})
module.exports = router