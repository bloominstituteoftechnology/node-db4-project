const server = require('./api/server');
require('dotenv').config();

const PORT = process.env.PORT || 9000; //eslint-disable-line

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});