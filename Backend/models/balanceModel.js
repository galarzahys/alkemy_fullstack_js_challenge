const async = require('hbs/lib/async');
var pool = require('./db');


async function getOperations() {
        var query = 'SELECT * FROM operations ORDER BY id DESC LIMIT 10';
        var rows = await pool.query(query);
        return rows;
}

async function getTotalOperations() {
        var query = 'SELECT * FROM operations ORDER BY id DESC';
        var rows = await pool.query(query);
        return rows;
}

async function getOperationsByType(type) {
        var query = 'SELECT * FROM operations WHERE type = ? ORDER BY id DESC LIMIT 10';
        var rows = await pool.query(query, [type]);
        return rows;
}

async function insertOperation(obj) {
        try {
                var query = "insert into operations set ?";
                var rows = await pool.query(query, [obj])
                return rows;

        } catch (error) {
                console.log(error);
                throw error;
        }
}

async function deleteOperationsById (id) {
        var query = 'delete from operations where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
}

async function getOperationById (id) {
        var query = 'select * from operations where id = ?';
        var rows = await pool.query(query, [id]);
        return rows[0];
}

async function modificarOperationById(obj, id) {
        try {
                var query = 'update operations set ? where id=?';
                var rows = await pool.query(query, [obj, id]);
                return rows;
        } catch (error) {
                throw error;
        }
}

async function sumPos() {
        var sum = [];
        var query = 'select sum(amount) from operations where type = "Profits"';
        sum = await pool.query(query);   
        sum = (JSON.stringify(sum[0])).split(':');
        sum = parseFloat(sum[1]);
        return sum;
};

async function sumNeg() {
        var sum = [];
        var query = 'select sum(amount) from operations where type = "Expense"';
        sum = await pool.query(query);   
        sum = (JSON.stringify(sum[0])).split(':');
        sum = parseFloat(sum[1]);
        return sum;
};

async function totalBalance() {
        
        let sum = await sumPos();
        let res = await sumNeg();
        let total = (sum - res).toFixed(2);
        return total;

};
        


module.exports = { getOperations, getTotalOperations, getOperationsByType, insertOperation, deleteOperationsById, getOperationById, modificarOperationById, sumPos, sumNeg, totalBalance }