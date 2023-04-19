const promisedQuery = require("./promisedQuery")

// BOOKS
async function getAllBooks() {
    return promisedQuery.createPromisedQuery(
        "select * from books"
    )
}


module.exports = {
    getAllBooks
}