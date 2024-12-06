const fs = require('fs');
const http = require('http');


// writeFileSync, creates file(synchronous call)
fs.writeFileSync("./new.txt", "Hello")

// Async
fs.writeFile("./new.txt", "Hello Async",(err)=>{console.log(err)});

const file = fs.readFileSync("./name.txt", "utf-8"); // sync
console.log(file);

fs.readFile("./name.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
});

// Append in file

fs.appendFileSync("./name.txt", `Rohan\n`);

fs.appendFile("./name.txt", `Again deepanshu ${Date.now()} \n\n`, (err)=>{console.log(err)});

// fs.unlinkSync("./log.txt");

console.log(fs.statSync("./name.txt"))

fs.mkdirSync("./Practice/index.js",{recursive:true});