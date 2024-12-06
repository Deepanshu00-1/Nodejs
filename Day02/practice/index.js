const math = require('./math');
const http = require('http');

http.createServer((req, res)=>{
    if(req.url == '/add'){
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end(`<h1>Sum of 2 and 3 is: ${math.add(2,3)}</h1>`);
    }
    else if(req.url =='/sub'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<h1>Sub of 2 and 3 is: ${math.sub(2,3)}</h1>`);
    }
    else if(req.url == "/mul"){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<h1>Mul of 2 and 3 is: ${math.mul(2,3)}</h1>`);
    }
    else if(req.url == "/div"){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<h1>Div of 2 and 3 is: ${math.div(2,3)}</h1>`)
    }
    else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.end("<h1>Page not found!</h1>");
    }
}).listen(3000);