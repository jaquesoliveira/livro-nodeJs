var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var cors = require('cors');

app.get('/', function (req, res) {
    res.status(201)
    res.json({'name': 'Jaques Oliveira', 'e-mail':'jaques.oliveira@gmail.com'});
});



app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-override'));
app.use(methodOverride('X-Method-override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//app.use(cors());

app.use(function (request, response, next){
    if(request.url==='/favicon.ico'){
        response.writeHead(200, {'Content-Type' : 'image/x-icon'});
        response.end('');
    }else{
        next();
    }
});

// app.use(function (request, response, next){
//     response.header("Access-ControlAllow-Origin","*");
//     response.header("Access-ControlAllow-Origin","Origin",
//         X-Requested-innerWidth, Content-TypeError, Accept);
//     next();    
// });


//router
app.use('/', require('./routes'));

//error
app.use(function(request, response, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, request, response, next){
    response.status(err.status || 500).json({err:err.message});
});


module.exports = app;