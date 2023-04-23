const mysql = require("mysql")

function getConnection(
    host = "localhost", 
    user = "root", 
    password = "", 
<<<<<<< Updated upstream:application/nodeApplication/Database/connection.js
    database = "book store", 
    port = "3306"
=======
<<<<<<< Updated upstream:application/nodeApplication/db/connection.js
    database = "test_lsp_db", 
=======
    database = "book store", 
>>>>>>> Stashed changes:application/nodeApplication/Database/connection.js
    port = "3388"
>>>>>>> Stashed changes:application/nodeApplication/db/connection.js
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