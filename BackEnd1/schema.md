The aim of this tutorial is to allow CRUD operations (GET, POST, PUT, and DELETE) on the API, which will run the corresponding database commands. To do this, we’ll set up a route for each endpoint, and a function corresponding to each query.

Creating routes for CRUD operations
We’re going to create six functions for six routes, as shown below.

First, create all the functions for each route. Then, export the functions so they’re accessible:

GET — / | displayHome()
GET — /users | getUsers()
GET — /users/:id | getUserById()
POST — users | createUser()
PUT — /users/:id | updateUser()
DELETE — /users/:id | deleteUser()

http://localhost:3001/

Now if you go to
http://localhost:3000/users or
http://localhost:3000/users/1,
you’ll see the JSON response of the two GET requests. But how can we test our POST, PUT, and DELETE requests?
