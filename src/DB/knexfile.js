const {
    mySQLConnectionHost,   
    mySQLConnectionPort,
    mySQLConnectionUser,
    mySQLConnectionPassword,
    mySQLConnectionDB,
} = require('../../config');

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: mySQLConnectionHost,
            port: mySQLConnectionPort,
            user: mySQLConnectionUser,
            password: mySQLConnectionPassword,
            database: mySQLConnectionDB,
        },
        pool: {
            min: 0,
            max: 10,
        },
    },
};
