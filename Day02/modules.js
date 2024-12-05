/*
module: file which is imported and used in code
*/
const math = require('./Math');

// console.log(math(2,5));
console.log(math.addfn(2,5));
console.log(math.subfn(2,5));
console.log(math.mulfn(2,5));
console.log(math.divfn(2,5));

const http = require('http');

http.createServer((req, res)=>{
    if(req.url == '/math'){
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.end(`<h1>The sum of 2 and 5 is: ${math.addfn(2,5)}</h1>`);
    }else{
        res.writeHead(404,{'Content-type' : 'text/html'});
        res.end('<h1>Page not found!</h1>');
    }
}).listen(3000);