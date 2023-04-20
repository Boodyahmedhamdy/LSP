const promisedQuery = require("./promisedQuery")

// BOOKS Getting
async function getAllBooks() {
    return promisedQuery.createPromisedQuery(
        "select * from books"
    )
}

async function getBookById(id) {
    return promisedQuery.createPromisedQuery(
        "select * from books where id = ?", 
        [id]
    )
}

async function getBooksByName(name) {
    return promisedQuery.createPromisedQuery(
        "select * from books where name like '%?%'", 
        [name]
    )
}

async function getBooksByAuthorName(authorName) {
    return promisedQuery.createPromisedQuery(
        "select * from books where author_name like '%?%'", 
        [authorName]
    )
}

async function getBooksByPrice(price) {
    return promisedQuery.createPromisedQuery(
        "select * from books where price = ?", 
        [price]
    )
}
async function getBooksWithPriceLessThanOrEquals(price) {
    return promisedQuery.createPromisedQuery(
        "select * from books where price <= ?", 
        [price]
    )
}

async function getBooksWithPriceGreaterThanOrEquals(price) {
    return promisedQuery.createPromisedQuery(
        "select * from books where price >= ?", 
        [price]
    )
}


module.exports = {
    getAllBooks
}