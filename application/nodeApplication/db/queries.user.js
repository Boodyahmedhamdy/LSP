const promisedQuery = require("./promisedQuery")

async function getAllUsers() {
    return promisedQuery.createPromisedQuery(
        "select * from users where role_id = 2"
    )
}


/**
 * Retrieves a user from the database by their ID.
 * @param {number} id - The ID of the user to retrieve.
 * @returns {Promise<Array>} A Promise that resolves to an array of user objects that match the given ID, or rejects with an error if there was a problem retrieving the data.
 */
async function getUserById(id) {
    return promisedQuery.createPromisedQuery(
        "select * from users where id = ?", 
        [id]
    )
}

async function getUsersByEmail(email) {
    return promisedQuery.createPromisedQuery(
        "select * from users where email = ?", 
        [email]
    )
}

async function getUsersByName(name) {
    return promisedQuery.createPromisedQuery(
        "select * from users where name like '%?%'", 
        [name]
    )
}


// BOOKS INSERTION
async function insertUser(user) {
    return promisedQuery.createPromisedQuery(
        "INSERT INTO `users` SET ?", 
        [user]
    )
}

// BOOKS UPDATE
/**
 * updates a book with given id by newBook
 */
async function updateUser(oldUserId, newUser) {
    return promisedQuery.createPromisedQuery(
        "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", 
        [newUser.name, newUser.email, newUser.password, oldUserId]
    )
}

// BOOKS DELETION
/**
 * deletes a book with given id
 */
async function deleteUser(userId) {
    return promisedQuery.createPromisedQuery(
        "DELETE FROM users WHERE id = ?", 
        [userId]
    )
}


module.exports = {
    getAllUsers, 
    getUserById, 
    getUsersByEmail, 
    getUsersByName, 
    insertUser, 
    updateUser, 
    deleteUser
}