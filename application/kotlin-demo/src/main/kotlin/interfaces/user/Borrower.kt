package interfaces.user

import interfaces.book.Borrowable

interface Borrower {

    fun borrow(borrowable: Borrowable)
}