



## User Context

### Login
```
context User
inv:
self.isLoggedIn = true implies self.username <> '' and self.password <> '' 
```


### Logout
```
context User
inv:
self.isLoggedIn = false implies self.username = '' and self.password = ''
```


## Borrower Context
### Borrow unlimited books
```
context Borrower
inv:
self.borrowedBooks->size() >= 0
```

