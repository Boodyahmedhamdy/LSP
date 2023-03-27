# Database Design

## entities

1. user
2. Admin
3. Book
4. RegisterRequest
5. BorrowingRequest

---

### User Relationships
1. user can register a new account
2. user can borrow many books **1..m** withen limitations that the admin puts for him


### Admin
1. admin recevies many registering requests from new users **1..m with rr** 
2. admin recevics many borrowing requests from existing useres **1..m with br**
3. admin manages many books
   1. admin creates many books **1..m with book**
   2. admin deletes many books **1..m with book**
   3. admin updates many books **1..m with book**


### Book
1. single book can be borrowed by only one user at the same time **1..1**
2. single book is created by only one Admin **1..1**
3. many users can take the same book but with different ISBN **different copies**


### RegisterRequest
1. rr is from one new user to one admin
2. rr can be accepted or rejected by the admin


### BorrowingRequest
1. br is from one existing user to one admin about one book
2. br can be accepted by the admin or the system if the user have reached the limitation of borrowing books at the same time
3. br can be rejected by the admin or the system if the user have reached the limitation of borrowing books at the same time