Problem Statement
Aap ek Movie Streaming Platform ke liye backend develop kar rahe hain.

Company chahti hai ki users movies dekh saken, filter kar saken aur admin naye movies add,.js ka use karke ek simple Movie update aur delete kar sake.

Aapko Express.js ka use karke ek simple Movie Management API develop karni hai.

Note:
Is assignment me database ka use nahi karna hai.

Saara data ek JavaScript Array me store hoga.

let movies = [
  {
    id: 1,
    title: "KGF Chapter 2",
    language: "Hindi",
    genre: "Action",
    rating: 9.3,
    releaseYear: 2022
  },
  {
    id: 2,
    title: "3 Idiots",
    language: "Hindi",
    genre: "Comedy",
    rating: 9.5,
    releaseYear: 2009
  },
  {
    id: 3,
    title: "Interstellar",
    language: "English",
    genre: "Sci-Fi",
    rating: 9.7,
    releaseYear: 2014
  },
  {
    id: 4,
    title: "Pushpa",
    language: "Telugu",
    genre: "Action",
    rating: 8.9,
    releaseYear: 2021
  }
]



Objective
Return all movies.

Example Request
GET /allMovies

Expected Response
Return complete movies array.

2.
Objective
Filter movies using Query Parameters.

Use only ONE route for all filters.

GET /movie

Supported Query Parameters
language
Example

GET /movie?language=Hindi

genre
Example

GET /movie?genre=Action

minRating
Return all movies whose rating is greater than or equal to the given value.

Example

GET /movie?minRating=9

releaseYear
Example

GET /movie?releaseYear=2022

Multiple Filters
All filters should work together.

Examples

GET /movie?language=Hindi&genre=Comedy

GET /movie?genre=Action&minRating=9

GET /movie?language=English&releaseYear=2014

GET /movie?language=Hindi&genre=Action&minRating=9

Important Note
Do NOT create separate routes for every filter.

Incorrect

GET /movieByLanguage

GET /movieByGenre

GET /movieByRating

Correct

GET /movie

Use Query Parameters.

3.
GET /movie/:id
Objective
Return details of a particular movie.

Use Route Parameters.

Example
GET /movie/3

Expected Response

Return movie having id 3.

4.
POST /createMovie
Objective
Add a new movie into the movies array.

{
  "title": "Jawan",
  "language": "Hindi",
  "genre": "Action",
  "rating": 8.7,
  "releaseYear": 2023
}

Expected Response
Movie Added Successfully

5.
PATCH /updateMovieRating/:id
Objective
Update only the rating of a movie.

Use Route Parameter to identify the movie.

{
  "rating": 9.8
}

Expected Response
Movie Rating Updated Successfully

6.
PUT /replaceMovie/:id
Objective
Replace the complete movie object.

{
  "title": "Avengers Endgame",
  "language": "English",
  "genre": "Action",
  "rating": 9.9,
  "releaseYear": 2019
}

Expected Response
Movie Updated Successfully

7.
DELETE /deleteMovie/:id
Objective
Delete a movie from the array.

Example
DELETE /deleteMovie/2

Expected Response
Movie Deleted Successfully

Constraints
Students must follow the following rules.

Use only Express.js.
Do NOT use Database.
Store data only inside the provided array.
Use Route Parameters wherever required.
Use Query Parameters wherever required.
Do NOT create extra routes.
Use appropriate HTTP Methods.
Every API should send a response.
Testing Scenarios
Test all the following requests.

GET /allMovies

GET /movie

GET /movie?language=Hindi

GET /movie?genre=Action

GET /movie?minRating=9

GET /movie?releaseYear=2022

GET /movie?language=Hindi&genre=Comedy

GET /movie?genre=Action&minRating=9

GET /movie?language=English&releaseYear=2014

GET /movie/1

POST /createMovie

PATCH /updateMovieRating/2

PUT /replaceMovie/3

DELETE /deleteMovie/4