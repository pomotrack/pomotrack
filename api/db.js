(function() {

    module.exports = process.env.DATABASE_URL || {
        'user': 'pomotrack',
        'database': 'pomotrack',
        'password': 'pomotrack',
        'host': 'localhost'
    };

})();
