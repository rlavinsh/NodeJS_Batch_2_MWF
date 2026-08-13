const express = require("express");
const app = express();
const userRoutes = require("./routes/product.route");
const PORT = 3000;

// app.use(express.json())

//Jab bhi mujhe kuch esha common kaam karwana ho toh iske liye hum use karte hein middleware

// midddleware k pass 3 signatures hote hein jisse hum kehte hein [req,res,next]

// middleware k andar order bahut important hota hein
let processRequest = (req, res, next) => {
  console.log("Processing Request");
  next();
};

const checklogging = (req, res, next) => {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next();
};

app.use(processRequest);
app.use(checklogging);
app.use("/api/v1", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "No Page Exist",
  });
});

// app.use(processRequest);
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
