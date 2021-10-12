require('dotenv').config();

const server = require("./api/server");

const PORT = process.env.PORT;//see .env

server.listen(PORT, ()=> 
    console.log(`\nAPI is running on PORT ${PORT}\n`)
);
