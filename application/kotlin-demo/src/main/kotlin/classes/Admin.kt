package classes

import interfaces.admin.Acceptor
import interfaces.admin.Creator
import interfaces.admin.Deletor
import interfaces.admin.Editor
import interfaces.book.Creatable
import interfaces.book.Deletable
import interfaces.book.Editable
import interfaces.request.Acceptable

class Admin(
    val name: String,
    val age: Int,
    val Type: Int
): Human(), Creator, Editor, Deletor, Acceptor {

    override fun create(creatable: Creatable) {
        creatable.create()
    }

    override fun edit(editable: Editable) {
        editable.edit()
    }

    override fun delete(deletable: Deletable) {
        deletable.delete()
    }

    override fun accept(acceptable: Acceptable) {
        acceptable.accept()
    }

}