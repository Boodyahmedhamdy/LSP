package classes

import interfaces.book.Borrowable
import interfaces.book.Creatable
import interfaces.book.Deletable
import interfaces.book.Editable
import interfaces.request.Requestable

open class Book(
    val name: String,
    val authorName: String,
    var price: Double
): Borrowable, Editable, Creatable, Deletable, Requestable {


    override fun borrow() {
        println("$this books was borrowed")
    }

    override fun edit() {
        println("$this books was edited")
    }

    override fun create() {
        println("$this books was created")
    }

    override fun delete() {
        println("$this books was deleted")
    }

    override fun request() {
        println("$this book was requested")
    }


}