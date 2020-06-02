var debug = require('debug')('livro_nodejs:controller')

function StromtrooperController(StormTropperModel){
    this.model = StormTropperModel;
}

StromtrooperController.prototype.getAll = function(request, response, next){
    this.model.find({}, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

StromtrooperController.prototype.getById = function(request, response, next){
    var _id = request.params._id;
    this.model.findOne(_id, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

StromtrooperController.prototype.create = function(request, response, next){
    var body = request.body;
    this.model.create(body, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

StromtrooperController.prototype.update = function(request, response, next){    
    var _id = request.params._id,
    body = request.body;
    
    this.model.update(_id, body, function(err, data){        
        if(err){
            return next(err);
        }
        response.json(data);
    });    
};

StromtrooperController.prototype.delete = function(request, response, next){
    var _id = request.params._id;
    this.model.remove(_id, function(err, data){
        if(err){
            return next(err);
        }
        return response.json(data);
    });
};

module.exports = function(StromtrooperModel){
    return new StromtrooperController(StromtrooperModel);
}