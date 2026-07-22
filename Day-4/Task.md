let students = [ { id: 1, name: "Rahul", course: "Node", }, { id: 2, name: "Aman", course: "React", }, ];

Ab niche diye gaye APIs ko implement kariye:

GET /allStudents
Jab user GET request bheje to students array ka poora data response me return hona chahiye.

POST /createStudents
Jab user POST request bheje to students array me niche diya gaya naya student add ho jana chahiye:

{ id: 3, name: "Priya", course: "Java" }

Response me "Student Added" message bhejiye.

PATCH /updateStudentDetail
Jab user PATCH request bheje to Aman ka course "React" se "MERN" me update kar dijiye.

Response me "Course Updated" message bhejiye.

PUT /updateStudent
Jab user PUT request bheje to Aman ka pura object replace karke niche diya gaya object store kariye:

{ id: 2, name: "Aman Kumar", course: "Backend" }

Response me "Student Replaced" message bhejiye.

DELETE /deleteStudent
Jab user DELETE request bheje to students array se last student ko remove kar dijiye.

Response me "Student Deleted" message bhejiye.

Agar user koi aisa route hit kare jo exist nahi karta, to response me "Route Not Found" return kariye.