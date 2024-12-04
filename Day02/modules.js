/*
module: file which is imported and used in code
*/
const math = require('./Add');

console.log(math(2,5));

const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>The sum is: math(2,5)</h1>');
}).listen(3000);