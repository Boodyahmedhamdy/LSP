const promisedQuery = require("./promisedQuery")



async function getAllBorrowingRequests() {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request"
    )
}

async function getBorrowingRequestsByUserId(userId) {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where user_id = ?", 
        [userId]
    )
}

async function getBorrowingRequestsByBookId(bookId) {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where book_id = ?", 
        [bookId]
    )
}

async function getBorrowingRequestsWithDurationLessThan(durationInDays) {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where duration_in_days <= ?", 
        [durationInDays]
    )
}


async function getBorrowingRequestsWithDurationGreaterThan(durationInDays) {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where duration_in_days >= ?", 
        [durationInDays]
    )
}

async function getBorrowingRequestsWithDurationEquals(durationInDays) {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where duration_in_days = ?", 
        [durationInDays]
    )
}

async function getAllAcceptedBorrowingRequests() {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where is_accepted = 1"
    )
}

async function getAllPendingBorrowingRequests() {
    return promisedQuery.createPromisedQuery(
        "select * from borrowing_request where is_accepted != 1"
    )
}

async function insertBorrowingRequest(
    userId, bookId, durationInDays
) {
    return promisedQuery.createPromisedQuery(
        "INSERT INTO `borrowing_request`(`user_id`, `book_id`, `duration_in_days`) VALUES (?, ?, ?)", 
        [userId, bookId, durationInDays]
    )
}

async function updateBorrowingRequest(newBorrowingRequest, oldBorrowingRequestId) {
    return promisedQuery.createPromisedQuery(
        "UPDATE `borrowing_request` SET ? where id = ?", 
        [newBorrowingRequest, oldBorrowingRequestId]
    )
}

async function acceptBorrowingRequest(borrowingRequestId) {
    return promisedQuery.createPromisedQuery(
        "UPDATE `borrowing_request` SET is_accepted = 1 where id = ?", 
        [borrowingRequestId]
    )
}

async function deleteBorrowingRequest(borrowingRequestId) {
    return promisedQuery.createPromisedQuery(
        "delete from borrowing_request where id = ?", 
        [borrowingRequestId]
    )
}

module.exports = {
    getAllBorrowingRequests, 
    getBorrowingRequestsByUserId, 
    getBorrowingRequestsByBookId, 
    getAllAcceptedBorrowingRequests, 
    getAllPendingBorrowingRequests, 
    getBorrowingRequestsWithDurationEquals, 
    getBorrowingRequestsWithDurationGreaterThan, 
    getBorrowingRequestsWithDurationLessThan, 
    insertBorrowingRequest, 
    updateBorrowingRequest, 
    deleteBorrowingRequest
}

