const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //binds export to day

const app = express();

const items = []; //the item will be reset by const
const workItems = [];

//create a folder called views that will hold your .ejs files
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    const day = date.getDate();

    //(folderName, {variableToReplace}: whatIsBeingPlacedThere);
    res.render("list", {listTitle: day, newListItems: items});
});


//when a new item is added user is redirected to home page where the updated list is
app.post("/", function(req, res){
    const item = req.body.newItem;
    //determines which list the item should go to
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("working on port 3000");
});