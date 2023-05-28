const http = require('http');
const express = require("express")
const app = express()
const path = require("path")
const collection = require("./lmongo");
const querystring = require('querystring');

var qs;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });

    req.on('end', async() => {
        qs = querystring.parse(data1);
        console.log(qs);
const data = {
        mail : qs['mail'],

        pwd : qs['pwd'],

        

}

await collection.insertMany([data]);
        res.write("login successfull");

        res.end();

    });

}).listen(4020); console.log('Server has Started.......');