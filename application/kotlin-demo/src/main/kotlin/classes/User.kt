package classes

import interfaces.book.Borrowable
import interfaces.book.Creatable
import interfaces.book.Deletable
import interfaces.book.Editable
import interfaces.request.Requestable
import interfaces.user.Borrower
import interfaces.user.Requester

class User: Human(), Borrower, Requester, Creatable, Editable, Deletable {


    override fun borrow(borrowable: Borrowable) {
        TODO("Not yet implemented")
    }

    override fun request(requestable: Requestable) {
        TODO("Not yet implemented")
    }

    override fun create() {
        TODO("Not yet implemented")
    }

    override fun delete() {
        TODO("Not yet implemented")
    }

    override fun edit() {
        TODO("Not yet implemented")
    }

}