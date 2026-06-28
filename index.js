// http server thata dupportd 4 routes (/sum , /sub, /div, /mul)
// express, hono, elysiajs, trpc

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function(req,res){
    res.sendFile("/harkirat-cohort/week-8/index.html")
})

// http://localhost:3002/sum?a=1&b=2
app.post("/sum/", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const sum = a + b;

    res.json({
        ans: sum
    })
    
})
app.post("/multi/", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const multi = a * b;
    res.json({
        ans: multi
    })
})
app.post("/div/",  function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const divi = a/b;
    res.json({
        ans: divi
    })
})
app.post("/sub/", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const subt = a-b;
    res.json({
        ans: subt
    })
})

app.listen(3002);
// 