# crud-api-ts-node

```
POST = Register = "/auth/register" = { email, password, username} => 
{
  "username",
  "email",
  "authentication": {
    "password",
    "salt"
  },
  "_id",
  "__v"
}

POST = Login = "/auth/login" = { email, password } => 
{
  "username",
  "email",
  "authentication": {
    "password",
    "salt",
    "sessionToken"
  },
  "_id",
  "__v"
}

GET = Ger all users = "/users" = isAuthenticated =>
[
  {
    "_id",
    "username",
    "email",
    "__v"
  }
]

DELETE = Delete user = "/users/:id" = isAuthenticated, isOwner =>
{
  "_id",
  "username",
  "email",
  "__v"
}

PATCH = Update user = "/users/:id" = { username } =isAuthenticated, isOwner => 
{
  "_id",
  "username",
  "email",
  "__v"
}
```