const server = require('./api/server')
require('dotenv').config();

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})