// Update with your config settings.

module.exports = {
//d{cc{f}up{a;(con,don)}mdsd}
  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: "./conf/cookbook.db3" //here goes db3
    },
  

pool:{
  afterCreate:(conn,done)=>{
    conn.run("PRAGMA foreign_keys=ON",done)
  }
},
migrations:{
  directory:"./conf/migrations"
},

seeds:{
  directory:"./conf/seeds"
}
 

}
}
