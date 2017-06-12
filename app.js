const express = require('express');
const app = express();
let httpRequest =  require('request');
let  bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');

})
app.post('/cluster', function (req, res) {

    httpRequest({uri:"https://kmeansuriz.azurewebsites.net/api/kMeans",method:"POST",body:req.body, json:true}, function (error, response) {

        if (error)
        {
            res.status(503).send({error: "error: k-means service is unavailable"});
        }
        else
        {
            res.status(response.statusCode).send(response.body);
        }
    });

})

app.listen(8080, function () {
    console.log('app listening on port 8080!')
})