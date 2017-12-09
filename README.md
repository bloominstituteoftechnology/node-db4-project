# Building and API using a Relational Database

## Topics

* Databases
* Relational Databases
* Query Builder - Knex

## Assignment

Build an API that persists data to SQLite3 or MySQL.

Use knex migrations to create the following database tables:

Users
- id: primary key, autoincrements.
- name: up to 128 characters long, required.
- createdAt: defaults to the current date and time.

Posts
- id: primary key, autoincrements.
- userId: references the id in the users table.
- text: not size limit, required.
- createdAt: defaults to the current date and time.

Tags
- id: primary key, autoincrements
- tag: string up to 16 characters long, unique.
- createdAt: defaults to the current date and time.

Establish a many to many relationship between `Posts` and `Tags`. 
The same `tag` can be added to different `posts` and a `post` can have multiple `tags`.
Add any tables necessary to accomplish this.

Seed test data into your tables using knex.

Implement the following endpoints:

### Users
* [POST] `/users` This route should save a new user to the database.
* [GET] `/users` This route will return an array of all users.
* [GET] `/users/:id` This route will return the user with the matching `id`.
* [GET] `/users/:id/posts` returns all posts for the user with the specified `id`.
* [PUT] `/users/:id` This route will update the user with the matching `id` using information sent in the body of the request.
* [DELETE] `/users/:id` This route should delete the specified user.

### Posts
* [POST] `/posts` This route should save a new post to the database.
* [GET] `/posts` This route will return an array of all posts.
* [GET] `/posts/:id` This route will return the post with the matching `id`.
* [PUT] `/posts/:id` This route will update the post with the matching `id` using information sent in the body of the request.
* [DELETE] `/posts/:id` This route should delete the specified post.

### Tags
* [POST] `/tags` This route should save a new tag to the database.
* [GET] `/tags` This route will return an array of all tags
* [GET] `/tags/:id` This route will return the tag with the matching `id`.
* [PUT] `/tags/:id` This route will update the tag with the matching `id` using information sent in the body of the request.
* [DELETE] `/tags/:id` This route should delete the specified tag.

## Extra Credit

- add a [GET] `/posts/:id/tags` endpoint that returns all tags for the post with the specified `id`.
- have the post returned by the [GET] `/posts/:id` endpoint include the user name(not the id) and the tags associated with the post.
