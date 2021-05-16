import express from "express";
import path from "path";
import compression from 'compression';

/* eslint-disable no-console */


const port = 3000;

const app = express();

app.use(compression());
app.use(express.static('dist'));

// Handle the routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

// Run the server on specified Port
app.listen(port, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`Example app listening at http://localhost:${port}`)
    }
});
