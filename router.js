//const db = require('')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ message: "Get!" })
})

router.get('/:id', (req, res, next) => {
  res.json({ message: "Get ID!" })
})

router.post('/', (req, res, next) => {
  res.json({ message: "Post!" })
})

router.put('/:id', (req, res, next) => {
  res.json({ message: "Put!" })
})

router.delete('/:id', (req, res, next) => {
  res.json({ message: "Delete!" })
})


module.exports = router