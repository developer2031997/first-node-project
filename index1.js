const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    // if(req.url === "/favicon.ico") return res.end();
    const log = `date : ${Date.now()} - url : ${req.url} - message : New req Received \n`;
    fs.appendFile('log.txt', log ,(err,data)=>{
        switch(req.url){
            case "/": 
            res.end("HomePage");
            break;
            case "/about": 
            res.end("AboutPage");
            break;
            default : 
            res.end("error 404");
        }
    })
})

myServer.listen(8000, ()=> console.log("server start"));