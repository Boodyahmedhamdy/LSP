package interfaces.admin

import interfaces.book.Deletable

interface Deletor {
    fun delete(deletable: Deletable)
}