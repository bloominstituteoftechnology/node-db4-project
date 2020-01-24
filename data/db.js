const mongoose = require('mongoose')
const uri = require('./config').uri

module.exports= async () =>{
    try{
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Db Conncted Successfully");
    }
    catch(err){
        console.log(err)
        process.exit(0)
    }
    
}
