const express = require('express');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});