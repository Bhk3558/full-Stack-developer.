const http =require("http")
http.createServer((req, res)=>{
    console.log("Hello Harish");
    res.end("Hello Boss:Your Daily Habits Have The Power To Change Your Life .");
}).listen(1404); 