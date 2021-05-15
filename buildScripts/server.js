import express from "express";
import path from "path";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */


const port = 3000;

const app = express();
const compiler = webpack(config);

// Integrate webpack with Express
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

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