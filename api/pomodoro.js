(function() {

    module.exports.get = function (req, res, next) {
       res.send({'hello': req.params.name});
       return next();
    };

    module.exports.put = function (req, res, next) {

    };

    module.exports.post = function (req, res, next) {

    };

    module.exports.del = function (req, res, next) {

    };

})();
