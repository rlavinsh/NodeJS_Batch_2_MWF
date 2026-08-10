const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "Development",
    designation: "Frontend Developer",
    salary: 55000,
    experience: 2,
    city: "Indore",
  },
  {
    id: 2,
    name: "Priya Verma",
    department: "Development",
    designation: "Backend Developer",
    salary: 65000,
    experience: 3,
    city: "Bhopal",
  },
  {
    id: 3,
    name: "Amit Singh",
    department: "HR",
    designation: "HR Executive",
    salary: 42000,
    experience: 1,
    city: "Delhi",
  },
  {
    id: 4,
    name: "Sneha Patel",
    department: "Testing",
    designation: "QA Engineer",
    salary: 50000,
    experience: 2,
    city: "Ahmedabad",
  },
  {
    id: 5,
    name: "Rohit Jain",
    department: "Development",
    designation: "Full Stack Developer",
    salary: 80000,
    experience: 5,
    city: "Pune",
  },
];

app.get("/employees", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "All employees",
    employees,
  });
});

app.get("/employees/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log(id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid id",
    });
  }

  let user = employees.find((val) => {
    return id === val.id;
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User found",
    user,
  });
});

app.post("/employees", (req, res) => {
  const { name, department, designation, salary, experience, city } = req.body;

  if (
    !name ||
    !department ||
    !designation ||
    salary === undefined ||
    experience === undefined ||
    !city
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  let newEmp = {
    id: employees[employees.length - 1].id + 1,
    name,
    department,
    designation,
    salary,
    experience,
    city,
  };

  employees.push(newEmp);
  return res.status(201).json({
    success: true,
    message: "User created",
    newEmp,
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
