function StromtrooperController(){}

StromtrooperController.prototype.getAll = function(request, response, next){
    response.send('get all stormtroopers');
};

StromtrooperController.prototype.create = function(request, response, next){
    response.send('creat stormtroopers');
};

StromtrooperController.prototype.update = function(request, response, next){
    response.send('update stormtroopers');
};

StromtrooperController.prototype.getById = function(request, response, next){
    response.send('get stormtrooper by id');
};

StromtrooperController.prototype.delete = function(request, response, next){
    response.send('delete stormtroopers');
};

module.exports = new StromtrooperController();