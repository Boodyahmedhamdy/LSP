
## Admin Context

### Manage Books
#### Create
```
context Admin
inv:
self.createBook(title, author, isbn) = true
```

#### Update
```
context Admin
inv:
self.updateBook(book : Book) : Boolean =
book.title <> '' and book.author <> '' and book.isbn <> '' and book.quantity >= 0
```

#### Delete

```
context Admin
inv:
self.books->includes(bookToDelete) implies bookToDelete.borrowedCopies = 0
```

### Manage Regestration Requests

#### Accept
```
context Admin
inv:
self.registrationRequests->includes(requestToAccept) implies requestToAccept.status = 'Accepted'
```

#### Reject
```
context Admin
inv:
self.registrationRequests->includes(requestToReject) implies requestToReject.status = 'Rejected'
```


### Manage Borrowing Requests
```context Admin
inv:
self.borrowingRequests->forAll(request | request.status = 'Accepted' or request.status = 'Rejected')
```

#### Accpet
```
context Admin
inv:
self.borrowingRequests->includes(requestToAccept) implies requestToAccept.status = 'Accepted'
```

#### Reject
```
context Admin
inv:
self.borrowingRequests->includes(requestToReject) implies requestToReject.status = 'Rejected'
```



