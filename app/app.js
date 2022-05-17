var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const app = express();

app.get("/api", (req, res) => {
  res.send([
    { project: "Dummy1", time: "21:00" },
    { project: "Dummy2", time: "21:10" },
    { project: "Dummy3", time: "21:20" },
    { project: "Dummy4", time: "21:30" },
    { project: "Dummy5", time: "21:50" },
  ]);
});
app.listen(9000);
