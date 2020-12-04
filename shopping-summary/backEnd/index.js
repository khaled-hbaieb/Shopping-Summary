// const path = require("path");
// const express = require("express");
// const app = express(); // create express app

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // start express server on port 5000
// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });
const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname,  "../public")));
app.use(express.static("public"));
app.get("/", (req, res) => {
    let dirPath = path.join(__dirname, "index.html");
    res.sendFile(dirPath);
  });

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});