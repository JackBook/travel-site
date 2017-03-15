var $ = require('jquery');
var Person = require('./modules/Person');

var jack = new Person("Jack Book", "purple");
jack.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

