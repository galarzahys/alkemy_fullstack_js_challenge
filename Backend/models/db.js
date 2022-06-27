var mysql = require('mysql');
const Pool = require('mysql/lib/Pool');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    multipleStatements: true
});

pool.query = util.promisify(pool.query);
module.exports = pool;