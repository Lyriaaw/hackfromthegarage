const orm = require("orm");
const database = require("../index.js");


var Medical = db.define('person', {
    id:      {type: 'serial', key: true},
    uid:    {type: 'text'},
    weight: {type: 'text'},
    timsetamp:     {type: 'text'},
    heartbeat:     {type: 'number'},
    glycemia:     {type: 'number'}
  }, {
    methods : {
      getUID: function() {
        return this.uid;
      },
      getWeight: function() {
          return this.weight;
      },
      getTimestamp: function() {
          return this.timsetamp;
      },
      getHeartbeat: function() {
        return this.heartbeat;
      },
      getGlycemia: function() {
        return this.glycemia;
      }
    }
  });

  
  var getAll = function() {
    Person.find({}, function(err, results) {
        if (err) {
            console.log(error);
            throw err;
        }
        console.log(results);
        return results;
      });
  }

