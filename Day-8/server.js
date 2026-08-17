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
