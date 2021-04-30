const db = require("../data/config")

function getAll() {
  return db("recipes")    
}








module.exports = {
  getAll
}