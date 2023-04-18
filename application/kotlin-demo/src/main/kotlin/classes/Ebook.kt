package classes

import interfaces.book.Borrowable
import interfaces.book.Creatable
import interfaces.book.Deletable
import interfaces.book.Editable
import interfaces.request.Requestable

class Ebook(
    name: String, authorName: String, price: Double
): Editable, Creatable, Deletable, Requestable, Borrowable {
    override fun borrow() {
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

    override fun request() {
        TODO("Not yet implemented")
    }
}