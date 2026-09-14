const express = require("express");

const app = express();

// const students = [
//   { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
//   { id: 2, name: "Aman", course: "Java", city: "Indore" },
//   { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
//   { id: 4, name: "Neha", course: "Python", city: "Bhopal" },
//   { id: 5, name: "Rohit", course: "Java", city: "Delhi" },
// ];

// app.get("/students", (req, res) => {
//   let filterData = [...students];
//   const course = req.query.course;
//   const city = req.query.city;
//   console.log(city);
//   if (course) {
//     filterData = filterData.filter((student) => {
//       return course.toLowerCase() === student.course.toLowerCase();
//     });
//   }

//   if(city){
//     filterData = filterData.filter((student)=>{
//         return city.toLowerCase() === student.city.toLowerCase()
//     })
//   }

//   res.send(filterData);
// });

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2500 },
  { id: 4, name: "Monitor", price: 12000 },
];

app.get("/product/:id", (req, res) => {
  // console.log(req.params);
  let id = req.params.id;

  let product = products.find((val) => {
    return id == val.id;
  });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
      data
    });
  }

  let discountPrice = product.price - product.price * 0.1;
  // product.discountPrice = discountPrice;
  res.send({
    ...product,
    discountPrice,
  });
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});

/**
 employees collection mein se Finance department ke saare employees find karo.

 employees collection mein se Mumbai city ka koi ek employee find karo.

 Ab ek new employee add karo.

name: "Arjun"
age: 26
department: "IT"
salary: 52000
city: "Pune"
skills: ["JavaScript", "Express"]

Ab ek saath 3 employees insert karo:

1. Meera
   age: 29
   department: "HR"
   salary: 57000
   city: "Delhi"
   skills: ["Recruitment", "Communication"]


2. Dev
   age: 33
   department: "Finance"
   salary: 72000
   city: "Mumbai"
   skills: ["Accounting", "Excel"]


3. Nisha
   age: 24
   department: "Marketing"
   salary: 41000
   city: "Indore"
   skills: ["SEO", "Content Writing"]

   Ab employees collection se IT department ke employees find karo, lekin output mein sirf:

name
salary

dikhna chahiye.

_id bhi nahi chahiye.

Aise employees find karo jinki salary ₹60,000 se greater hai.

Aise employees find karo jinki age 30 ya usse zyada hai.

Aise employees find karo jinki salary ₹50,000 se kam hai.

Aise employees find karo jinki age 25 ya usse kam hai.

Aise employees find karo jinka department exactly "HR" hai.

Aise employees find karo jo IT department mein nahi hain.

insertOne()
insertMany()

findOne()
find()

Projection

updateOne()
updateMany()

deleteOne()
deleteMany()

$set
$inc

$gt
$gte
$lt
$lte
$eq
$ne

$and
$or
$in
$nin

sort()
limit()
skip()
countDocuments()
 */