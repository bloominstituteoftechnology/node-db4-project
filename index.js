require("dotenv").config();

const server = require("./api/server");

const PORT = process.cnv.PORT;

server.listen(PORT, () => {
  console.log(`Runing on port ${PORT}`)
})
