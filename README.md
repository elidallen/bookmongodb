
Library Management System - Node, Express, MongoDB

This project is a server application built with Node.js, Express, and MongoDB, serving as a library management system for books, movies, and video games. It includes a CRUD API to manage the library's collection, MongoDB indexes for efficient queries, and validation rules to ensure data consistency.

API Routes

Books

GET /books: Retrieve a list of all books.

GET /book/:bookId: Retrieve details of a specific book by bookId.

POST /books: Add a new book.

PUT /book/:bookId: Update details of a specific book by bookId.

DELETE /book/:bookId: Delete a specific book by bookId.

Video Games

GET /videoGames: Retrieve a list of all video games.

GET /videoGame/:gameId: Retrieve details of a specific video game by gameId.

POST /videoGames: Add a new video game.

PUT /videoGame/:gameId: Update details of a specific video game by gameId.

DELETE /videoGame/:gameId: Delete a specific video game by gameId.

Movies

GET /movies: Retrieve a list of all movies.

GET /movie/:movieId: Retrieve details of a specific movie by movieId.

POST /movies: Add a new movie.

PUT /movie/:movieId: Update details of a specific movie by movieId.

DELETE /movie/:movieId: Delete a specific movie by movieId.

