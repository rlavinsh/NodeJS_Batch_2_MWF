const express = require("express");

const app = express();
app.use(express.json());
// app.get("/student/:id", (req, res) => {
//   console.log(req.params.id);

//   res.send("hello");
// });

app.get("/student", (req, res) => {
  //EndPoint
  //http://localhost:3000/student?productName=Laptop&maxPrice=50000
  console.log(req.query);
  console.log(req.query.productName);
  console.log(req.query.maxPrice);

  res.send("Done");
});

app.post("/register", (req, res) => {
    console.log(req.body);

  const data = req.body;
  res.send(data);
  //   res.send("Done");
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});

let user = {
  firstName: "Rohit",
  lastName: "Verma",
};
