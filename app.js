const express = require('express')
const app = express()
let httpRequest =  require('request');
let  bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');

})
app.post('/cluster', function (req, res) {

     console.log(req.body);

    httpRequest({uri:"https://kmeansuriz.azurewebsites.net/api/kMeans",method:"POST",body:req.body, json:true}, function (error, response) {

        if (error)
        {
            res.status(500).send({error: "internal server error"});
        }
        else
        {
            console.log(JSON.stringify(response));
            console.log(response.body);
            console.log(response.statusCode);

            res.status(response.statusCode).send(response.body);

        }


    });

})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})