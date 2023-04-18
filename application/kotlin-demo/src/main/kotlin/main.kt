import classes.Admin
import classes.Book
import classes.Ebook
import classes.User

fun main() {
    val admin = Admin("boody", 20, 1)
    val book = Book("prisoner of zenda", "abc", 99.0)
    val user = User()
    val ebook = Ebook(book.name, book.authorName, book.price)

    admin.create(user)
    admin.delete(user)
    admin.edit(user)
    user.request(ebook)
    user.borrow(ebook)


}