var express = require('express'),
    router = express.Router();

router.get('/', function(request, reponse){
    reponse.send('get all stormtroopers');
});

router.get('/:_id', function(request, reponse){
    reponse.send('get a specific stormtrooper by id');
});

router.post('/', function(request, reponse){
    reponse.send('create a new stormtrooper');
});

router.put('/:_id', function(request, reponse){
    reponse.send('up date a stormtrooper');
});

router.delete('/', function(request, reponse){
    Response.send('remove a stormtrooper');
});

module.exports = router;