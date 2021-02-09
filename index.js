const server = require('./api/server');
require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server listening on port %{PORT}...`)
});