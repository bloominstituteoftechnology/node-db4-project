const express = require('express')
// const { checkSchemeId, validateScheme, validateStep } = require('./scheme-middleware')
// const Schemes = require('./scheme-model.js')

const router = express.Router()

router.use('*', (req, res) => {
    res.json("you are now inside the recipes router")
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stak: err.stack,
    })
})

module.exports = router