const http = require('http');
const express = require("express")
const app = express()
const path = require("path")
const collection = require("./farmmongo");
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

        lname : qs['lname'],

        email : qs['email'],

        land : qs['land'],

        cattle : qs['cattle'],

        cro : qs['cro'],

        phno : qs["phno"],

       

}

await collection.insertMany([data]);
        res.write("Your Order has been placed successfully")

        res.end();

    });

}).listen(4000); console.log('Server has Started.......');