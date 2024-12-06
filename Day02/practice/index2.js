const http = require('http');
const math = require('./math');

http.createServer((req, res)=>{
    if(req.url === '/add'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<i><h1>The sum of 2 and 3 is: ${math.add(2,3)}</h1></i>`);
    }else if(req.url === '/sub'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<i><h1>The sub of 2 and 3 is: ${math.sub(2,3)}</h1></i>`);
    }else if(req.url === '/mul'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<i><h1>The mul of 2 and 3 is: ${math.mul(2,3)}</h1></i>`);
    }else if(req.url === '/div'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(`<i><h1>The div of 2 and 3 is: ${math.div(2,3)}</h1></i>`);
    }else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('Page not found!');
    }
}).listen(3000);