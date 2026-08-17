// /**
//  * 200 ->Success -> Request successfully complete ho gayi.

//  * 201 ->Created -> Server par successfully new resource create hua.

//  * 204 ->No Content-> Request successful hai, lekin response body mein koi data nahi hai.

//  * 400 ->Bad Request -> Client ki request mein invalid/missing data hai.

//  * 401 -> Unauthorized -> User authenticated nahi hai ya valid authentication credentials nahi hain.

//  * 403 ->Forbidden -> User authenticated hai, lekin uske paas permission nahi hai.

//  * 404-> Not Found -> Requested resource/route nahi mila.

//  * 409-> Conflict -> Request existing data ke saath conflict kar rahi hai, jaise duplicate email.

//  * 422 -> Unprocessable Entity -> Request ka format valid hai

//  * 501 -> Not Implemented ->Server requested functionality ko support/implement nahi karta.

//  * 503 ->Service Unavailable->Server temporarily available nahi hai, usually overload/maintenance ki wajah se.
//  */

//what is API ?
// API (Application Programming Interface) ek medium/interface hai jiske through do software/applications ek-dusre se communicate karte hain.

//what is RESTAPI ??
// REST (Representational State Transfer) ek architectural style hai jiske rules/principles follow karke APIs design ki jaati hain.

// REST API mein generally HTTP methods use hote hain
// GET     /users       → saare users
// GET     /users/10    → user 10
// POST    /users       → new user
// PATCH   /users/10    → user 10 update
// DELETE  /users/10    → user 10 delete


// Always Remember ->  Every API is not a REST API.But every REST API is a API