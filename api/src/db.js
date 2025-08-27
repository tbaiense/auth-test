const mysql = require("mysql2/promise")

const poolConfig = {
    host: "auth-bd",
    user: "root",
    password: "root",
    database: "auth_test",
    connectionLimit: 5,
    maxPreparedStatements: 10,
}

const pool = mysql.createPool(poolConfig)

module.exports = pool