const express = require('express')
const app = express()
const apiRoute = require('./routes/api')
const db = require('./data/db')

const Port = process.env.Port || 5000

//Connects To Database
db()

app.use('/', apiRoute)

app.listen(Port,()=> console.log(`Server is running on port: ${Port}`))