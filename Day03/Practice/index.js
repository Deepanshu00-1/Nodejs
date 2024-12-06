const fs = require("fs");
const http = require("http");

// create file
fs.writeFileSync("./days.txt", `Monday\n`);
// fs.writeFile("./days.txt", "Monday", (err)=>{console.log(err)});

// delete file
// fs.unlinkSync("./days");

// update file
fs.appendFileSync("./days.txt", `Tuesday\n`);
// fs.appendFile("./days.txt", `Tuesday\n`,(err)=>{conosle.log(err)});

// read file
// console.log(fs.readFileSync("./days.txt", "utf-8"));
fs.readFile("./days.txt", "utf-8", (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})