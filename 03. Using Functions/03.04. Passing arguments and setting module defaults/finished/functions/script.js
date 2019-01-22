var ray = (function() {
  var DEFAULTS = { // provides flexibility to gather module defaults in an object
    say: 'hello'
  };

  return {
    speak: function() {
      var myArguments = arguments[0] || '';//short-circuit evaluation (matters)
      var statement = myArguments.say || DEFAULTS.say;
      console.log(statement);
// vers1: 
// if (arguments[0]) {console.log(statement);}
// else {console.log(DEFAULTS.say);}
    }
  };

/* alt:
  return {
    speak: function(myArgument = '') {
      var statement = myArgument.say || DEFAULTS.say;
      console.log(statement);
    }
  };
*/
})();