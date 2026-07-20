let http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
  //   console.log(req.url);
  // res.end(`<h1>server running</h1>`);
  // console.log(req.url);
  // console.log(req.method);

  // if (req.url == "/") {
  //   res.end("Server running");
  // } else if (req.url == "/about") {
  //   res.end("This is about page");
  // } else if (req.url == "/homepage") {
  //   res.end("This is homepage");
  // } else {
  //   res.end("No Route Found");
  // }
  if (req.url == "/student" && req.method == "GET") {
    res.end("All Students Detail");
  } else if (req.url == "/student" && req.method == "POST") {
    res.end("Student Created Successfully");
  } else if (req.url == "/student" && req.method == "PUT") {
    res.end("Student Detail Updated");
  } else if (req.url == "/student" && req.method == "PATCH") {
    res.end("Student Name Updated");
  } else if (req.url == "/student" && req.method == "DELETE") {
    res.end("Student Deleted");
  } else {
    res.end(`<h1>No Route Found</h1>`);
  }
});

server.listen(3000, () => {
  console.log(`server running on port 3000`);
});
