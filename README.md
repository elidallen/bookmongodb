
Library Management System - Node, Express, MongoDB

This project is a server application built with Node.js, Express, and MongoDB, serving as a library management system for books, movies, and video games. It includes a CRUD API to manage the library's collection, MongoDB indexes for efficient queries, and validation rules to ensure data consistency.

API Routes

Books
GET /books: Retrieve a list of all books.
GET /book/:id: Retrieve details of a specific book by ID.
POST /books: Add a new book.
PUT /book/:id: Update details of a specific book by ID.
DELETE /book/:id: Delete a specific book by ID.

Video Games
GET /videoGames: Retrieve a list of all video games.
GET /videoGame/:id: Retrieve details of a specific video game by ID.
POST /videoGames: Add a new video game.
PUT /videoGame/:id: Update details of a specific video game by ID.
DELETE /videoGame/:id: Delete a specific video game by ID.

Movies
GET /movies: Retrieve a list of all movies.
GET /movie/:id: Retrieve details of a specific movie by ID.
POST /movies: Add a new movie.
PUT /movie/:id: Update details of a specific movie by ID.
DELETE /movie/:id: Delete a specific movie by ID.
