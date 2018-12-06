const orm = require("orm");
const database = require("../index.js");


var Person = db.define('person', {
    id:      {type: 'serial', key: true},
    uid:    {type: 'text'},
    weight: {type: 'text'},
    timsetamp:     {type: 'text'},
    heartbeat:     {type: 'number'},
    glycemia:     {type: 'number'}
  }, {
    methods : {
      fullName: function() {
        return this.name + ' ' + this.surname;
      }
    }
  });

