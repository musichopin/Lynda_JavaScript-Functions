var ray = (function() {
  var DEFAULTS = { // provides flexibility to gather module defaults in an object
    say: 'hello'
  };

  return {
    speak: function() {
      var myArguments = arguments[0] || ''; // short-circuit evaluation
      var statement = myArguments.say || DEFAULTS.say;
      console.log(statement);
    }
  };

/* alt:

  return {
    speak: function(myArguments = '') {
      var statement = myArguments.say || DEFAULTS.say;
      console.log(statement);
    }
  };
*/
})();