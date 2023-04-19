const mysql = require("mysql")

function getConnection(
    host = "localhost", 
    user = "root", 
    password = "", 
    database = "test_lsp_db", 
    port = "3388"
) {
    
    let connection = mysql.createConnection({
        host: host, 
        user: user, 
        password: password, 
        database: database, 
        port: port
    })

    connection.connect((err) => {
        if (err) {
            console.log(err)
            return 
        }
        console.log("connected successfully from connection.js")
    })

    return connection
}

module.exports = {
    getConnection
}