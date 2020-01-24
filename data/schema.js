const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjId = Schema.ObjId
const todo = new Schema({
    id:ObjId,
    title:{type:String,required:true},
    body:{type:String,required:true}
})
module.exports = model = mongoose.model("todo",todo)