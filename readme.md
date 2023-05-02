## User Model
 
 # Register 
This endpoint should allow users to register. Hash the password on store.

# Register endpoint

- Method - POST
- Request 
 ` POST /api/register` 

- Body 

```
 "name" : "Prerna",
 "email" : "prerna@123",
 "password" : "$2b$10$eYx9acCuJthlSx826mkksubjQTxwUYItgbsBKIbcuUaVlXbjg/06."
 "dob":"1999-12-14",
 "bio":"I am a web developer"

```   

- response 
status code  - `201` 
message - `User registerd successfully!`

- if user already existed then response will be `User already exsists.Please login first`

# GET endpoint 

-Method: GET
-Request:`/api/users`

-Response
status: `200`
JSON Data returned:
  ```[
  {
    "_id": "6450b310092ff51dcd28e92b",
    "name": "Prerna",
    "email": "prerna@gmail.com",
    "password": "$2b$07$YAHj/D1yAhOAcQe.mjwWBufZ6l4XP1u97tIHC90IX7w0um8nHTcDi",
    "dob": "1999-12-14T00:00:00.000Z",
    "bio": "I am web developwe",
    "posts": [],
    "friends": [],
    "friendRequests": [
      "6450bd89f947d73213ddbddf"
    ],
    "__v": 1
  },
  {
    "_id": "6450bd89f947d73213ddbddf",
    "name": "mukul",
    "email": "mukul@gmail.com",
    "password": "$2b$07$qTSX2k4CPqXk0iYKmmt5h.LoxnaEjPTyl8wKIzvJQMHo6xbeLQgVi",
    "dob": "1999-12-09T00:00:00.000Z",
    "bio": "I am data scientist",
    "posts": [],
    "friends": [],
    "friendRequests": [],
    "__v": 0
  }
]

if error comes then response will be something went wrong

