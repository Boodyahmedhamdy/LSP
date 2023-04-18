package interfaces.admin

import interfaces.book.Creatable

interface Creator {
    fun create(creatable: Creatable)


}