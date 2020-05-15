var express = require('express'),
    router = express.Router();

router.get('/', function(request, response){
    response.status(201);
    response.json({'name': 'Jaques Oliveira', 'e-mail':'jaques.oliveira@gmail.com'})
});

module.exports = router;