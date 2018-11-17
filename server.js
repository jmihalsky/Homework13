var express = require("express");

var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// app.get("/",function(req,res) {
//     res.sendfile(path.join(__dirname, "./app/public/home.html"));
// });

app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT)
});

