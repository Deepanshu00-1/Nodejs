// HTTP methods
// Get    : 
// POST   :
// PUT    :
// PATCH  :
// DELETE :

const express = require("express");
const app = express();
const http = require("http");

app.get("/",(req,res)=>{
    return res.send("<h1>Hello from homepage</h1>");
});

app.get("/about", (req, res)=>{
    return res.send("<h1>Hello from about page</h1>");
});

const server = http.createServer(app);
server.listen(8000, ()=> console.log("Server started"));

