const fs = require("fs");
const http = require("http");
const url = require("url");

fs.writeFileSync("./log.txt", `logs will be updated here\n`);

http.createServer((req, res)=>{
    const log = `${new Date(Date.now())}: ${req.url} - request received\n\n`;
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl.query);
    console.log(myUrl);
    if(req.url === "/favicon.ico") return res.end();
    fs.appendFile("./log.txt", log, (err)=>{
        if(err){
            console.log(err);
        }else{
            switch(myUrl.pathname){
                case "/":
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.end(`<h1>Hello ${myUrl.query.myname} its the homepage</h1>`);
                    break;
                case "/about":
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.end(`<h1>Heeeeeeeeeeeeeeeeeeeeeeee ${myUrl.query.myname} its the about page</h1>`);
                    break;
                case "/contact":
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.end(`<h1>And ${myUrl.query.myname} this is contact page</h1>`);
                    break;
                case "/search":
                    const search = myUrl.query.search_query;
                    res.end("Here are your results for " + search);
                default:
                    res.end("Page not found");
            }
        }
    })
}).listen(3000);