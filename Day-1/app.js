const { log } = require("console");
let fs = require("fs");
// console.log(fs);
// Mujhe ek file banani hein
//writeFileSync: jab bhi mujhe file create karni hein
// fs.writeFileSync("student.txt","fS module completed");

// mujhe eshi file mein data add karna hein
// fs.appendFileSync("student.txt","\n we are learning Node JS")
// console.log("File mein data add ho gaya");

// file k data ko read karna hein
// let data = fs.readFileSync("student.txt","utf-8")
// console.log(data);

// fs.renameSync("student.txt","Faculty.txt")
// console.log("file ka name change ho gaya");

// jab bhi mujhe yeah check karna hein ki yeah file exist karti hein yha nahi

// console.log(fs.existsSync("Faculty.txt"))

// fs.writeFileSync("./files/roadmap.txt","HTML")

// fs.appendFileSync("./files/roadmap.txt","\nCSS\nJS\nReact\nNodeJS")
// console.log("file mein data update ho gaya");

// let data = fs.readFileSync("./files/roadmap.txt","utf-8")
// console.log(data);

// fs.renameSync("./files/roadmap.txt","./files/map.txt")
// console.log(fs.existsSync("./files/map.txt"));

// mkdirSync : isshe hun apne directory mein ek new folder create kar sakte hein

// fs.mkdirSync("files")
// console.log("Folder created")

// readdirSync:
// console.log(fs.readdirSync("./files"));

//unlinkSync: esshe meri file delete ho jayegi
// fs.unlinkSync("./files/abc.txt")
// console.log("file deleted successfully");

// rmdirSync
// fs.rmdirSync("./files")
// console.log("folder deleted");

// console.log("code start");
// fs.writeFile("student.txt", "Hello students\n kaise ho", (err) => {
//   if (err) {
//     console.log("something went wrong");
//     console.log(err.message);
//     return;
//   }
//   console.log("file created");
// });
// console.log("code ends");

fs.readFile("student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("something went wrong");
    console.log(err.message);
    return;
  }
  console.log(data);
});
