var ray = (function() {
  var DEFAULTS = {
    say: 'hello',
    speed: 'normal'
  };

  console.log("\nIm automatically logged without being called\n\n");

  return {
    speak: function() {
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || DEFAULTS.say;
      console.log(statement);
      return this; // this returns ray obj (chaining is important feature of jquery)
    },
    run : function() {
      var myArguments = arguments[0] || '';
      var running = myArguments.speed || DEFAULTS.speed;
      console.log('running...'+ running);
      return this;
    }
  };
})();