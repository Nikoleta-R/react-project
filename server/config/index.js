const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/my-database',
        SALT_ROUNDS: 10,
        SECRET: 'babygirl',
        COOKIE_NAME: 'USER_SESSION',
    },
    production: {
        PORT: 80,
        DB_CONNECTION: 'insert mongodb atlas connection here',
        SALT_ROUNDS: 10,
        SECRET: 'babygirl',
        COOKIE_NAME: 'USER_SESSION',
    }
};

module.exports = config[process.env.NODE_ENV.trim()]