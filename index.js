require('dotenv').config()

const server = require("./api/sever")
const PORT = process.env.PORT 

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
