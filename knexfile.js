// Update with your config settings.

module.exports = {
//d{cc{f}up{a;(con,don)}mdsd}
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./conf/cookbook.db3" //here goes db3
    }
  },
useNullAsDefault:true,
pool:{
  afterCreate:(con,don)=>{
    con.run("PRAGMA foreign_keys=ON",don)
  }
},
migrations:{
  directory:"./conf/migrations"
},

seeds:{
  directory:"./conf/seeds"
}
 

};
