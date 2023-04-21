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

// BOOKS INSERTION
async function insertBook(book) {
    return promisedQuery.createPromisedQuery(
        "INSERT INTO `books` SET ?", 
        [book]
    )
}

// BOOKS UPDATE
/**
 * updates a book with given id by newBook
 */
async function updateBook(oldBookId, newBook) {
    return promisedQuery.createPromisedQuery(
        "UPDATE books SET name = ?, price = ?, author_name = ?,image_url=? WHERE id = ?", 
        [newBook.name, newBook.price, newBook.author_name, newBook.image_url, oldBookId]
    )
}

// BOOKS DELETION
/**
 * deletes a book with given id
 */
async function deleteBook(bookId) {
    return promisedQuery.createPromisedQuery(
        "DELETE FROM BOOKS WHERE id = ?", 
        [bookId]
    )
}


module.exports = {
    getAllBooks, 
    getBookById, 
    getBooksByAuthorName, 
    getBooksByName, 
    getBooksByPrice, 
    getBooksWithPriceGreaterThanOrEquals, 
    getBooksWithPriceLessThanOrEquals, 
    insertBook, 
    updateBook, 
    deleteBook
}