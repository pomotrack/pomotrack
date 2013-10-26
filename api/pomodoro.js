(function() {

    module.exports.get =  function send(req, res, next) {
       res.send({'hello': req.params.name});
       return next();
    };

})();
