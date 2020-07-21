const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //allows us to post nested objects and allows you to grab info from forms. need to declare extended: true/false


// normal calculator
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); //no matter what, this directory will be used regardless of files on other computers
});


app.post("/", function(req, res){ //handles the post method from the form
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    
    res.send("The result is " + result);
});


// bmi calculator

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){ //handles the post method from the form
    
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height*height);
    
    res.send("Your result is " + bmi);
});

app.listen(3000, function(){
    console.log("working");
});