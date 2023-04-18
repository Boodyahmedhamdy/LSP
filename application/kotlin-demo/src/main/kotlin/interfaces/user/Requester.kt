package interfaces.user

import interfaces.request.Requestable

interface Requester {
    fun request(requestable: Requestable)
}