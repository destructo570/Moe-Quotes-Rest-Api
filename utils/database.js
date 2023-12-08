const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'moe_quotes_sql',
    password: 'sql.hsa123'
});

module.exports = pool.promise();