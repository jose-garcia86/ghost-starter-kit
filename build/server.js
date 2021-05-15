import express from "express";
import path from "path";

const port = 3000;

const app = express();

// Handle the routes
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err){
    if(err){
        console.log(err)
    } else {
        console.log(`Example app listening at http://localhost:${port}`)
    }
});