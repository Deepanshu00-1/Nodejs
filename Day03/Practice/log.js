const fs = require("fs");
const http = require("http");

fs.writeFileSync("./log.txt", `logs will be updated here\n`);

http.createServer((req, res)=>{
    const log = `${new Date(Date.now())}: ${req.url} - request received\n\n`;
    fs.appendFile("./log.txt", log, (err)=>{
        if(err){
            console.log(err);
        }else{
            switch(req.url){
                case "/":
                    res.end("Homepage");
                    break;
                case "/about":
                    res.end("About page");
                    break;
                case "/contact":
                    res.end("Contact page");
                    break;
                default:
                    res.end("Page not found");
            }
        }
    })
}).listen(3000);