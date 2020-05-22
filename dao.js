var Datastore = require('nedb');
var db = new Datastore({ filename: 'instances.db' });

db.loadDatabase(function(err) {
    // Start issuing commands after callback...
    console.log("database loaded")
});

module.exports = db ;
