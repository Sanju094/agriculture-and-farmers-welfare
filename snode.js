const http = require('http');
const express = require("express")
const app = express()
const path = require("path")
const collection = require("./ordermongo");
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
        fname : qs['fname'],

        city : qs['city'],

        add : qs['add'],

        state : qs['state'],

        pin : qs['pin'],

        mno : qs['mno'],

}

await collection.insertMany([data]);
        res.write("Your Order has been placed successfully")

        res.end();

    });

}).listen(4001); console.log('Server has Started.......');