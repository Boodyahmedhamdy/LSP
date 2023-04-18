package classes

import interfaces.request.Acceptable
import interfaces.book.Creatable
import interfaces.request.Requestable

class Request: Requestable, Acceptable, Creatable {
    override fun accept() {
        TODO("Not yet implemented")
    }

    override fun create() {
        TODO("Not yet implemented")
    }

    override fun request() {
        TODO("Not yet implemented")
    }


}