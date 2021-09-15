const express = require("express");
const app = express();
const favicon = require("serve-favicon");
var path = require('path');

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
