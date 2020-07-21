const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    
})

//captures data from user entry
app.post("/", function(req, res){
    const query = req.body.cityName;
    const apikey = "23a8c8557c2c84e638eab4ac63945842";
    const unit = "imperial"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=${unit}`;
    https.get(url, function(response){
        console.log(response.statusCode); //shows you easily if your request worked
        
        response.on("data", function(data){
            const weatherData = JSON.parse(data); //converts to readable text. JSON.stringify condenses it
            const temp = weatherData.main.temp; //looks for specific data by going through tree
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p>The weather is currently " + weatherDescription + ".</p>")
            res.write(`<h1>The temperature in ${query} is ${temp} degrees.</h1>`); //.write allows you to have multiple things since only one send is allowed
            res.write(`<image src=${imageURL}>`);
            res.send();
        })
    })

})



app.listen(3000, function(){
    console.log("working");
})