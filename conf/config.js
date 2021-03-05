const knex= require("knex")

const confs=require("../knexfile")

module.exports=knex(confs.development)