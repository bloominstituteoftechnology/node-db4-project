const express = require('express')
const router = express.Router()

router.use("*",(req,res,next)=>{ // eslint-disable-line
    res.json({api:'up'})
})
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router