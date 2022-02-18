require('dotenv').config() 

module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    // JWT_SECRET: process.env.TOKEN_SECRET || 'ssh'
    SECRET: process.env.SECRET || 'keep it secret!!!!!',
    JWT_SECRET: process.env.JWT_SECRET || 'keep it secret!!!!!'
}