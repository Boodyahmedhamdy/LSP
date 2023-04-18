package interfaces.admin

import interfaces.book.Editable

interface Editor {
    fun edit(editable: Editable)
}