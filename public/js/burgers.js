var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgerController.js");

var PORT = process.env.PORT || 8080

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listerner(PORT, function () {
    console.log("Server listening on https://localhost:" + PORT);
})
