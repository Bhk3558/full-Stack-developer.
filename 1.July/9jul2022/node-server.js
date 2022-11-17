
const http = require("http");
console.log("Hello World 1")

http.createServer((req, res)=>{ 
  res.end("welcome to NodeJS Server");
  console.log("Hello World 2")
}).listen(4100);
console.log("Hello World 3")
// localhost:4100 // open in browser.
