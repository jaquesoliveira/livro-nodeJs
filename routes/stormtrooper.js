var express = require('express'),
    router = express.Router();

//var mongo = require('../db/mongo');
var mongoose = require('../db/mongoose');
var StormtrooperModel = require('../models/StromtrooperModel')(mongoose);
var StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);

router.get('/', StormtrooperController.getAll
    .bind(StormtrooperController));

router.get('/:_id', StormtrooperController.getById
    .bind(StormtrooperController));

router.post('/', StormtrooperController.create
    .bind(StormtrooperController));

router.put('/:_id', StormtrooperController.update
    .bind(StormtrooperController));

router.delete('/:_id', StormtrooperController.delete
    .bind(StormtrooperController));

module.exports = router;