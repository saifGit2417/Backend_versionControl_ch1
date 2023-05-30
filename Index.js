// chapter 3 starting learning express
const express = require("express");
const portNumber = 8001;

const fsModule = require("fs");
const htmlFile = fsModule.readFileSync("index.html", "utf-8");
const jsonFile = JSON.parse(fsModule.readFileSync("data.json", "utf-8"));


const morgan=require('morgan')
const server = express();

// body parser
server.use(express.json());

// enable third party logger

server.use(morgan('dev'))

// to send static file
server.use(express.static("public"));


// http://localhost:8001/data.json to access static files

// custom middleware

// const auth = (req, res, next) => {
//   console.log(req.query);
//   if (req.query.password=="saif") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };

// server.use(auth);

// web API -- end point
server.get("/", (req, res) => {
  res.json({
    type: "GET1"
  });
});
server.get("/", (req, res) => {
  res.json({
    type: "GET2"
  });
});
server.post("/", (req, res) => {
  res.json({
    type: "POST"
  });
});
server.put("/", (req, res) => {
  res.json({
    type: "PUT"
  });
});
server.delete("/", (req, res) => {
  res.json({
    type: "DELETE"
  });
});
server.patch("/", (req, res) => {
  res.json({
    type: "PATCH"
  });
});

// server.get("/", (req, res) => {
//   // res.send("new data send")
//   // res.sendFile('/Users/91703/New Data/Backend_selflearning/Backend_versionControl_ch1/index.html')  ///to send html file
//   // res.json(jsonFile)  //to send json file
//   // res.status(400).send("page not found")  //to sent status and send something with it
// });

server.listen(portNumber, () => console.log("server started at " + portNumber));
