
Library Management System - Node, Express, MongoDB

This project is a server application built with Node.js, Express, and MongoDB, serving as a library management system for books, movies, and video games. It includes a CRUD API to manage the library's collection, MongoDB indexes for efficient queries, and validation rules to ensure data consistency.

API Routes

Books
GET /books: Retrieve a list of all books.
GET /book/:id: Retrieve details of a specific book by id.
POST /books: Add a new book.
PUT /book/:id: Update details of a specific book by id.
DELETE /book/:id: Delete a specific book by id.

Video Games
GET /videoGames: Retrieve a list of all video games.
GET /videoGame/:id: Retrieve details of a specific video game by id.
POST /videoGames: Add a new video game.
PUT /videoGame/:id: Update details of a specific video game by id.
DELETE /videoGame/:id: Delete a specific video game by id.

Movies
GET /movies: Retrieve a list of all movies.
GET /movie/:id: Retrieve details of a specific movie by id.
POST /movies: Add a new movie.
PUT /movie/:id: Update details of a specific movie by id.
DELETE /movie/:id: Delete a specific movie by id.
