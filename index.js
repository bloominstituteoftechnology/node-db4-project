const server = require("./api/server");

const PORT = process.cnv.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Runing on port ${PORT}`)
})
