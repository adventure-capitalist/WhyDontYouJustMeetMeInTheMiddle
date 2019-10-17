//express server

const express = require("express");
const router = express.Router();

// custom middleware create
const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  if (req.method == "GET" && req.url == "/Users") {
    console.log("I am MIDDLEWARE!!!");
    next();
  } else {
    console.log("This server only supports GET requests!!!");
    res.write("This server only supports GET requests!!!"); //write a response to the client
    res.end(); //end the response
  }
};

const app = express();

// application level middleware
app.use(LoggerMiddleware);

var count = 0;

// users route
app.get(
  "/users",
  (req, res, next) => {
    console.log("I AM IN THE MIDDLE");
    count += 1;
    console.log(count);
    next();
  },
  (req, res) => {
    res.json({ status: true });
  }
);

// save route
app.post("/users", (req, res) => {
  res.json({
    status: true
  });
});

app.listen(3002, (req, res) => {
  console.log("server running on port 3002");
});
