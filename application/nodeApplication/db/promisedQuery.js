const connection = require("./connection")
const util = require("util")

function createPromisedQuery(query, params) {
    const conn = connection.getConnection()
    let promisedQuery =  util.promisify(conn.query).bind(conn)
    console.log("promisedQuery created successflly")
    return promisedQuery(query, params)
}

module.exports = {
    createPromisedQuery
}