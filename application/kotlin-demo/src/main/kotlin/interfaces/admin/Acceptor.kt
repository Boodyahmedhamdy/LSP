package interfaces.admin

import interfaces.request.Acceptable

interface Acceptor {

    fun accept(acceptable: Acceptable)

}