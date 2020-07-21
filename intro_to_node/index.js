//const fs = require('fs'); //incorporates file system module into project via require

//fs.copyFileSync("file1.txt", "file2.txt"); //copies file from source to destination. runned in hyper

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log("hero name:" + mySuperheroName + "\nvillain name: " + mySupervillainName);