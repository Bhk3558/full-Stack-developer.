
const http = require("http");

http.createServer((req, res)=>{ 
  res.end("welcome to NodeJS Server");
}).listen(4000);