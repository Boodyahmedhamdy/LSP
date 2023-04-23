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

async function getBooksByRackNumber(rackNumber) {
    return promisedQuery.createPromisedQuery(
        "select * from books where rack_number = ?", 
        [rackNumber]
    )
}

async function getAllBorrowedBooks() {
    return promisedQuery.createPromisedQuery(
        "select * from books where is_borrowed = 1"
    )
}

async function getAllAvailableBooks() {
    return promisedQuery.createPromisedQuery(
        "select * from books where is_borrowed != 1"
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
<<<<<<< Updated upstream:application/nodeApplication/Database/queries.books.js
        "UPDATE books SET name = ?, price = ?, author_name = ?,image_url=? WHERE id = ?", 
        [newBook.name, newBook.price, newBook.author_name, newBook.image_url, oldBookId]
=======
<<<<<<< Updated upstream:application/nodeApplication/db/queries.books.js
        "UPDATE books SET name = ?, price = ?, author_name = ? WHERE id = ?", 
        [newBook.name, newBook.price, newBook.authorName, oldBookId]
=======
        "UPDATE books SET name = ?, price = ?, author_name = ?,rack_number = ?, image_url=? WHERE id = ?", 
        [newBook.name, newBook.price, newBook.author_name,newBook.rack_number, newBook.image_url, oldBookId]
>>>>>>> Stashed changes:application/nodeApplication/Database/queries.books.js
>>>>>>> Stashed changes:application/nodeApplication/db/queries.books.js
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
    getBooksByRackNumber, 
    getAllAvailableBooks,
    getAllBorrowedBooks,
    insertBook, 
    updateBook, 
    deleteBook
}