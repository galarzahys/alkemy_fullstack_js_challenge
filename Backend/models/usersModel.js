var pool = require('./db');
var md5 = require('md5');
const async = require('hbs/lib/async');


async function getUserByUsernameAndPassword(name, password) {
    try {
        var query = 'Select * from users where name = ? and password = ? limit 1';
        var rows = await pool.query(query, [name, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }