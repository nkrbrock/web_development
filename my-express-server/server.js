const express = require("express");

const app = express();

//initialize in terminal
app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
}); //tells the server what to return once it connects to root ("location", function(request, response))

app.get("/contact", function(req, res){
    res.send("contact me at: example@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<p>Hello. My name is Nathan. I am a person. I do things.</p>");
});

app.listen(3000, function(){
    console.log('server started on port 3000');
}); //listens on specific port (ie 3000) for http requests
